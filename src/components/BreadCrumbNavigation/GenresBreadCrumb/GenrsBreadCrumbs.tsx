import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';



import { Breadcrumb, BreadcrumbsProps } from '../BreadCrumdsModels';
import { convertBreadcrumb } from '../ConvertBreadcrumd';



import styles from './GenresBreadCrumbs.module.scss';


const defaultProps: BreadcrumbsProps = {
  rootLabel: '/movies',
  omitRootLabel: true,
  labelsToUppercase: false,
  replaceCharacterList: [{ from: '-', to: ' ' }],
  transformLabel: undefined,
  omitIndexList: undefined,
  inactiveItemStyle: null,
  inactiveItemClassName: `${styles.slash}`,
  activeItemStyle: null,
  activeItemClassName: 'point'
}

/**
 * A functional React component for Next.js that renders a dynamic Breadcrumb navigation
 * based on the current path within the Next.js router navigation.

 * @param props - object of type BreadcrumbsProps
 * @returns The breadcrumb React component.
 */

const Breadcrumbs = ({
  rootLabel,
  omitRootLabel,
  labelsToUppercase,
  replaceCharacterList,
  transformLabel,
  omitIndexList,
  inactiveItemStyle,
  inactiveItemClassName,
  activeItemStyle,
  activeItemClassName
}: BreadcrumbsProps) => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb> | null>(null)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/')
        }
      })
      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav className={styles.breadcrumb} aria-label='breadcrumbs'>
      <ul>
        {!omitRootLabel && (
          <li>
            <Link href='/'>{convertBreadcrumb(rootLabel || 'Movies', labelsToUppercase, replaceCharacterList, transformLabel)}</Link>
          </li>
        )}
        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, i) => {
            if (!breadcrumb || breadcrumb.breadcrumb.length === 0 || (omitIndexList && omitIndexList.find(value => value === i))) {
              return
            }
            return (
              <li
                key={breadcrumb.href}
                className={i === breadcrumbs.length - 1 ? activeItemClassName : inactiveItemClassName}
                style={i === breadcrumbs.length - 1 ? activeItemStyle : inactiveItemStyle}
              >
                <Link href={breadcrumb.href}>{t(`${convertBreadcrumb(breadcrumb.breadcrumb, labelsToUppercase, replaceCharacterList, transformLabel)}`)}</Link>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

Breadcrumbs.defaultProps = defaultProps

export default Breadcrumbs
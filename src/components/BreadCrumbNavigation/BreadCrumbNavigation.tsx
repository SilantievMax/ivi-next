import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './BreadCrumbNavigation.module.scss'
import { Breadcrumb, BreadcrumbsProps } from './BreadCrumdsModels'
import { convertBreadcrumb } from './ConvertBreadcrumd'

const defaultProps: BreadcrumbsProps = {
  rootLabel: '',
  omitRootLabel: false,
  labelsToUppercase: false,
  replaceCharacterList: [{ from: '-', to: ' ' }],
  transformLabel: undefined,
  omitIndexList: undefined,
  inactiveItemStyle: null,
  inactiveItemClassName: '',
  activeItemStyle: null,
  activeItemClassName: ''
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
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb> | null>(null)
  const router = useRouter()
  const { t } = useTranslation()
  function ucFirst(str: string | string[]) {
    return str[0].toUpperCase() + str.slice(1)
  }
  useEffect(() => {
    if (router) {
      if (router.query.genre) {
        const linkPaths = []
        const linkPath = router.asPath.split('/')
        linkPath.shift()
        linkPaths.push(linkPath[0])
        linkPaths.push(ucFirst(router.query.genre))
        const pathArray = linkPaths.map((path, i) => {
          return {
            breadcrumb: path,
            href: '/' + linkPath.slice(0, i + 1).join('/')
          }
        })

        setBreadcrumbs(pathArray as Breadcrumb[])
        return
      }
      const linkPath = router.asPath.split('/')
      linkPath.shift()
      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/')
        }
      })
      setBreadcrumbs(pathArray)
      return
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }
  return (
    <nav
      className={`${cn(styles.breadcrumb, { [styles.pointBreadcrumb]: inactiveItemClassName === 'point', [styles.slashBreadcrumb]: activeItemClassName === 'slash' })}`}
      aria-label='breadcrumbs'
    >
      <ul>
        {!omitRootLabel && (
          <li>
            <Link href='/'>{convertBreadcrumb(rootLabel || 'Home', labelsToUppercase, replaceCharacterList, transformLabel)}</Link>
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
                className={
                  i === breadcrumbs.length - 1
                    ? `${cn({ [styles.slash]: activeItemClassName === 'slash' })}`
                    : `${cn({ [styles.slashActive]: inactiveItemClassName === 'slash', [styles.point]: activeItemClassName === 'point' })}`
                }
                style={i === breadcrumbs.length - 1 ? activeItemStyle : inactiveItemStyle}
              >
                <Link onClick={() => console.log(breadcrumb.href)} href={breadcrumb.href}>
                  {t(`${convertBreadcrumb(breadcrumb.breadcrumb.replaceAll('+', ', ').replaceAll('genres=', ''), labelsToUppercase, replaceCharacterList, transformLabel)}`)}
                </Link>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

Breadcrumbs.defaultProps = defaultProps

export default Breadcrumbs

export const MemoBreadcrumbs = memo(Breadcrumbs)

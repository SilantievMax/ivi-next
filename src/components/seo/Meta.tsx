import Head from 'next/head'
import { title } from 'process'
import React, { FC, PropsWithChildren } from 'react'

import { getTitle } from './getTitle'
import { IMeta } from './meta.interface'

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta name='description' content={description}></meta>
            <meta name='og:title' content={getTitle(title)}></meta>
            <meta name='og:description' content={description}></meta>
          </>
        ) : (
          <meta name='ivi' content='noindex, nofollow'></meta>
        )}
      </Head>
      {children}
    </>
  )
}

export default Meta

import React, { FC, PropsWithChildren, ReactNode } from 'react'

import Wrapper from '../Wrapper/Wrapper'
import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'

import Footer from '@/src/components/Footer/Footer'
import Header from '@/src/components/Header/Header'

interface LayoutProps extends IMeta {
  children: ReactNode
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ title, description, children }) => {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <Wrapper>{children}</Wrapper>
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout

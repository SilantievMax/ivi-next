import React, { FC, ReactNode } from 'react'

import Example from '../BreadCrumbNavigation/BreadCrumbNavigation'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Wrapper from '../Wrapper/Wrapper'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
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

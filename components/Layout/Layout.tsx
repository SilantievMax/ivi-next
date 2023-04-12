import React, { FC, ReactNode } from 'react'

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
      {children}
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout

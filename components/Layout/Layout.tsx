import React, { FC, ReactNode } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Wrapper from '../Wrapper/Wrapper'
import HomePage from '@/components/screens/HomePage/HomePage'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <Wrapper>
      {children}
      </Wrapper>
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout

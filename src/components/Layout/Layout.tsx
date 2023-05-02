import React, { FC, ReactNode } from 'react'

import Authorization from '../Authorization/Authorization'
import Wrapper from '../Wrapper/Wrapper'

import Footer from '@/src/components/Footer/Footer'
import Header from '@/src/components/Header/Header'

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
      <Authorization />
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout

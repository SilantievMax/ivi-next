import React, { FC, ReactNode } from 'react'
import Header from '@/src/components/Header/Header'
import Wrapper from '../Wrapper/Wrapper'
import Footer from '@/src/components/Footer/Footer'

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

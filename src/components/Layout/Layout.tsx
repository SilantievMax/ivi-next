import React, { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'

import Authorization from '../Authorization/Authorization'
import Wrapper from '../Wrapper/Wrapper'
import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'

import Footer from '@/src/components/Footer/Footer'
import Header from '@/src/components/Header/Header'
import { selectIpOpenAuth } from '@/src/store/reducers/authReducer'

interface LayoutProps extends IMeta {
  children: ReactNode
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ title, description, children }) => {
  const IpOpenFormAuth = useSelector(selectIpOpenAuth)
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <Wrapper>{children}</Wrapper>
      {IpOpenFormAuth && <Authorization />}
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout

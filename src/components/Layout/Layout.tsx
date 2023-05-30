import React, { FC, PropsWithChildren, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Authorization from '../Authorization/Authorization';
import Wrapper from '../Wrapper/Wrapper';
import { IMeta } from '../seo/meta.interface';
import Footer from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header/Header';
import { checkAuth } from '@/src/services/auth.service';
import { selectIpOpenAuth } from '@/src/store/reducers/authReducer';
import { AppDispatch } from '@/src/store/store';
import { getLocalStorage } from '@/src/utils/local-storage';
import { LOCAL } from '@/src/types/Auth';

interface LayoutProps extends IMeta {
  children: ReactNode
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({children }) => {
  const IpOpenFormAuth = useSelector(selectIpOpenAuth)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (getLocalStorage(LOCAL.TOKEN)) {
      dispatch(checkAuth())
    }
    return
  }, [])
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
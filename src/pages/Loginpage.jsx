import React from 'react'
import Header from '../components/loginPage/Header'
import Universal from '../components/loginPage/Universal'
import AnyOne from '../components/loginPage/AnyOne'
import Work from '../components/loginPage/Work'
import Footer from '../components/common/Footer'
import { LoginFooterLink, SocialIcons } from '../components/common/Helper'

const LoginPage = () => {
  return (
    <div className=" overflow-x-clip">
      <Header />
      <Universal />
      <AnyOne />
      <Work />
      <Footer link={LoginFooterLink} icon={SocialIcons} />
    </div>
  );
}

export default LoginPage

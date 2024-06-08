import React from 'react'
import Header from '../components/loginpage/Header'
import Universal from '../components/loginpage/Universal'
import AnyOne from '../components/loginpage/AnyOne'
import Work from '../components/loginpage/Work'
import Footer from '../components/common/Footer'
import { LoginFooterLink, SocialIcons } from '../components/common/Helper'

const Loginpage = () => {
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

export default Loginpage

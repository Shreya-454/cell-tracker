import React from 'react'
import Head from '../components/homepage/Head'
import Companies from '../components/homepage/Companies'
import Account from '../components/homepage/Account'
import Advantages from '../components/homepage/Advantages'
import HowItWorks from '../components/homepage/HowItWorks'
import Find from '../components/homepage/Find'
import Footer from '../components/homepage/Footer'


const LandingPage = () => {
  return (
    <div className=' overflow-x-clip'>
      <Head />
      <Advantages />
      <HowItWorks />
      <Companies />
      <Account />
      <Find />
      <Footer/>
    </div>
  );
}

export default LandingPage

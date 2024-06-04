import React from 'react'
import Head from '../components/homepage/Head'
import Companies from '../components/homepage/Companies'
import Account from '../components/homepage/Account'
import Advantages from '../components/homepage/Advantages'
import HowItWorks from '../components/homepage/HowItWorks'
import Find from '../components/homepage/Find'


const LandingPage = () => {
  return (
    <div>
      <Head />
      <Advantages />
      <HowItWorks />
      <Companies />
      <Account />
      <Find/>
    </div>
  );
}

export default LandingPage

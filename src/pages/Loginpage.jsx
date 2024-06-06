import React from 'react'
import Header from '../components/loginpage/Header'
import Universal from '../components/loginpage/Universal'
import AnyOne from '../components/loginpage/AnyOne'
import Work from '../components/loginpage/Work'
import Foot from '../components/loginpage/Foot'

const Loginpage = () => {
  return (
    <div className=' overflow-x-clip'>
        <Header/>
      <Universal />
      <AnyOne/>
      <Work/>
      <Foot/>
    </div>
  )
}

export default Loginpage

import React from "react";
import Head from "../components/homePage/Head";
import Companies from "../components/homePage/Companies";
import Account from "../components/homePage/Account";
import Advantages from "../components/homePage/Advantages";
import HowItWorks from "../components/homePage/HowItWorks";
import Find from "../components/homePage/Find";
import Footer from "../components/common/Footer";
import { HomeFooterLink, SocialIcons } from "../components/common/Helper";

const LandingPage = () => {
  return (
    <div className=" overflow-x-clip">
      <Head />
      <Advantages />
      <HowItWorks />
      <Companies />
      <Account />
      <Find />
      <Footer link={HomeFooterLink} icon={SocialIcons} />
    </div>
  );
};

export default LandingPage;

import React from "react";
import Head from "../components/homepage/Head";
import Companies from "../components/homepage/Companies";
import Account from "../components/homepage/Account";
import Advantages from "../components/homepage/Advantages";
import HowItWorks from "../components/homepage/HowItWorks";
import Find from "../components/homepage/Find";
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

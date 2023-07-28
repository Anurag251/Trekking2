import BannerComponent from "../components/Banner.component";
import WhatOurCustomersSaysComponent from "../components/WhatOurCustomersSays.component";
import MountainOFKnowledgeComponent from "../components/MountainOFKnowledge.component";
import AdVentuResComponent from "../components/AdVentuRes.component";
import SacredCommunityComponent from "../components/SacredCommunity.component";
import HelpfulYetisComponent from "../components/HelpfulYetis.component";
import AboutSacredComponent from "../components/AboutSacred.component";
import TestinomialComponent from "../components/Testinomial.component";

const HomePage = () => {
  return (
    <div className="home-page">
      <BannerComponent />

      <AboutSacredComponent />

      <AdVentuResComponent />

      <MountainOFKnowledgeComponent />

      <TestinomialComponent />

      <SacredCommunityComponent />

      <HelpfulYetisComponent />
    </div>
  );
};

export default HomePage;

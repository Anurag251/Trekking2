import BannerComponent from "../components/Banner.component";
import AboutComponent from "../components/About.component";
import PackageComponent from "../components/Package.component";
import KnowledgeComponent from "../components/Knowledge.component";
import TestinomialComponent from "../components/Testinomial.component";
import BlogComponent from "../components/Blog.component";
import TeamsComponent from "../components/Teams.component";

const HomePage = () => {
  return (
    <div className="home-page">
      <BannerComponent />

      <AboutComponent />

      <PackageComponent />

      <KnowledgeComponent />

      <TestinomialComponent />

      <BlogComponent />

      <TeamsComponent />
    </div>
  );
};

export default HomePage;

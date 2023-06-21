import HeaderComponent from "./components/Header.component";
import "./assets/styles/main.sass";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import FooterComponent from "./components/Footer.component";
import { PackageDetails } from "./pages/PackageDetails.page";
import { Fragment, useContext, useEffect, useState } from "react";
import { ContactComponent } from "./components/Contact.component";
import BlogPage from "./pages/Blog.page";
import AllPackagePage from "./pages/AllPackage.page";
import SearchPage from "./pages/Search.page";
import LoadingComponent from "./components/Loading.component";
import { AllDataContext } from "./context/AllData.context";
import SuccessMessageComponent from "./components/SuccessMessage.component";
import BlogDetailsPage from "./pages/BlogDetails.page";
import AboutPage from "./pages/About.page";
import SideNavComponent from "./components/SideNav.component";

function App() {
  const { loading } = useContext(AllDataContext);

  const location = useLocation();
  const [contactPopup, setContactPopup] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);
  return (
    <div className="app">
      {loading ? (
        <LoadingComponent />
      ) : (
        <Fragment>
          <HeaderComponent />

          <SideNavComponent />

          <SuccessMessageComponent />

          <ContactComponent contactPopup={contactPopup} setContactPopup={setContactPopup} />

          <div className={`enquiry-sec ${contactPopup ? "active" : ""}`}>
            <button className="enquiry-icon">
              <i className="fas fa-phone"></i>
            </button>

            <p
              className="enquiry-button"
              onClick={() => setContactPopup(!contactPopup)}
            >
              Enquiry
            </p>

            <button className="enquiry-icon">
              <i className="fas fa-envelope"></i>
            </button>
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<PackageDetails />} />
            <Route path="/Knowledge" element={<BlogPage />} />
            <Route path="/packages" element={<AllPackagePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <FooterComponent
            contactPopup={contactPopup}
            setContactPopup={setContactPopup}
          />
        </Fragment>
      )}
    </div>
  );
}

export default App;

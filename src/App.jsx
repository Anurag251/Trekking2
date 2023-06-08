import HeaderComponent from "./components/Header.component";
import "./assets/styles/main.sass";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import FooterComponent from "./components/Footer.component";
import { PackageDetails } from "./pages/PackageDetails.page";
import { useEffect, useState } from "react";
import { ContactComponent } from "./components/Contact.component";
import BlogPage from "./pages/Blog.page";
import AllPackagePage from "./pages/AllPackage.page";

function App() {
  const location = useLocation();
  const [contactPopup, setContactPopup] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);
  return (
    <div className="app">
      <HeaderComponent />

      <ContactComponent contactPopup={contactPopup} />

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
        <Route path="/details" element={<PackageDetails />} />
        <Route path="/Knowledge" element={<BlogPage />} />
        <Route path="/packages" element={<AllPackagePage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;

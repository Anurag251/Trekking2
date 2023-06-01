import HeaderComponent from "./components/Header.component";
import "./assets/styles/main.sass";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import FooterComponent from "./components/Footer.component";

function App() {
  return (
    <div className="app">
      <HeaderComponent />

      <div className="enquiry-sec">
        <button className="enquiry-icon">
          <i className="fas fa-phone"></i>
        </button>

        <p className="enquiry-button">Enquiry</p>

        <button className="enquiry-icon">
          <i className="fas fa-envelope"></i>
        </button>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;

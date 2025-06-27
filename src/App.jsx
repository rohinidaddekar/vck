import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import CoursesPages from "./pages/CoursesPages";
import ContactPages from "./pages/ContactPages";
import ApplyPage from "./pages/ApplyPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/Pages.css";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Rohini Sunil Daddekar"
          studentPhotoUrl="/images/Rohini.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

      <div className="main">
        <Router>
          <Header />
          <div className="main-container">
            <div className="container">
              <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/home" element={<HomePages />} />
                <Route path="/about" element={<AboutPages />} />
                <Route path="/courses" element={<CoursesPages />} />
                <Route path="/contact" element={<ContactPages />} />
                <Route path="/admissions" element={<ApplyPage />} />
              </Routes>
            </div>
          </div>
          <ChatbotComponent />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;

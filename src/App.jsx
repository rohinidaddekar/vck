import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import CoursesPages from "./pages/CoursesPages";
import ContactPages from "./pages/ContactPages";
import ApplyPage from "./pages/ApplyPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/Pages.css";

const App = () => {
  return (
    <div className="main">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/home" element={<HomePages />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/courses" element={<CoursesPages />} />
          <Route path="/contact" element={<ContactPages />} />
          <Route path="/Apply" element={<ApplyPage/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;

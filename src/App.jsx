import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About/About";

const App = () => {
  AOS.init();
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

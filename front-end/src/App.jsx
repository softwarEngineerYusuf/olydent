import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Hakkımızda from "./Pages/Hakkımızda";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./Pages/Appointment";
import ScrollTop from "./ScrollTop";

import Iletişim from "./Components/iletişim/Iletişim";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hakkımızda" element={<Hakkımızda />} />
          <Route path="/randevu" element={<Appointment />} />
          <Route path="/iletişim" element={<Iletişim />} />
        </Routes>
        <Footer />
        <Iletişim />
      </BrowserRouter>
    </>
  );
}

export default App;

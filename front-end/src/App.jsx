import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Hakkımızda from "./Pages/Hakkımızda";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hakkımızda" element={<Hakkımızda />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

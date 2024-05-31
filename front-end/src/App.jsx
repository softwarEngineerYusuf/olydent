import "./App.css";
import { Helmet } from "react-helmet";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Hakkımızda from "./Pages/Hakkımızda";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./Pages/Appointment";
import ScrollTop from "./ScrollTop";
import IletişimPages from "./Pages/IletişimPages";
import Iletişim from "./Components/iletişim/Iletişim";
import Staff from "./Pages/Staff";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Helmet>
          <title>Bayrampaşa Olydent Diş Kliniği</title>
          <meta
            name="description"
            content="Olydent Bayrampaşa Diş Kliniği resmi web sitesi."
          />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Olydent Bayrampaşa Diş Kliniği",
                "url": "https://www.olydent.com",
                "logo": "https://www.olydent.com/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-401-555-1212",
                  "contactType": "Müşteri Hizmetleri"
                }
              }
            `}
          </script>
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hakkımızda" element={<Hakkımızda />} />
          <Route path="/randevu" element={<Appointment />} />
          <Route path="/iletişim" element={<IletişimPages />} />
          <Route path="/kadromuz" element={<Staff />} />
        </Routes>
        <Footer />
        <Iletişim />
      </BrowserRouter>
    </>
  );
}

export default App;

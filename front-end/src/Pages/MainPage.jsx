import Hakkımızda from "../Components/hakkımızda/Hakkımızda";
import Navbar from "../Components/navbar/Navbar";
import Services from "../Components/services/Services";
import "./MainPage.css";

function MainPage() {
  return (
    <>
      <Navbar />
      <Hakkımızda />
      <Services />
    </>
  );
}

export default MainPage;

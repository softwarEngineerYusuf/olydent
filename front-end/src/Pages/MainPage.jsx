import Comments from "../Components/comments/Comments";
import Doctors from "../Components/doctors/Doctors";
import Hakkımızda from "../Components/hakkımızda/Hakkımızda";
import Navbar from "../Components/navbar/Navbar";
import Numbers from "../Components/numbers/Numbers";
import Services from "../Components/services/Services";
import "./MainPage.css";

function MainPage() {
  return (
    <>
      <Navbar />
      <Hakkımızda />
      <Services />
      <Doctors />
      <Numbers />
      <Comments />
    </>
  );
}

export default MainPage;

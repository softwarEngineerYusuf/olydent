import Comments from "../Components/comments/Comments";
import Doctors from "../Components/doctors/Doctors";
import HakkımızdaComponent from "../Components/hakkımızda/HakkımızdaComponent";
import Information from "../Components/information/Information";
import Carousell from "../Components/navbar/Carousell";

import Numbers from "../Components/numbers/Numbers";
import Services from "../Components/services/Services";

import "./MainPage.css";

function MainPage() {
  return (
    <>
      <Carousell />
      <HakkımızdaComponent />
      <Services />
      <Doctors />
      <Numbers />
      <Comments />
      <Information />
    </>
  );
}

export default MainPage;

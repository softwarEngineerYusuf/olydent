import Comments from "../Components/comments/Comments";
import Doctors from "../Components/doctors/Doctors";
import HakkımızdaComponent from "../Components/hakkımızda/HakkımızdaComponent";
import Carousell from "../Components/navbar/Carousell";
import GoogleMap from "../Components/map/GoogleMap";
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
      <GoogleMap />
    </>
  );
}

export default MainPage;

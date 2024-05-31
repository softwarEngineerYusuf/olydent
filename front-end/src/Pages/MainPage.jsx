import Comments from "../Components/comments/Comments";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Ana Sayfa - Olydent Diş Kliniği</title>
        <meta
          name="description"
          content=" Bayrampaşa Olydent Diş Kliniği Ana sayfasına hoş geldiniz."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Ana Sayfa",
              "url": "https://www.olydent.com"
            }
          `}
        </script>
      </Helmet>
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

import GoogleMap from "../Components/map/GoogleMap";
import { Helmet } from "react-helmet";
function Iletişim() {
  return (
    <div className="mt-2 container">
      <Helmet>
        <title>İletişim-Olydent Diş Kliniği</title>
        <meta
          name="description"
          content=" Bayrampaşa Olydent Diş Kliniğini ile iletişime geç"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "İletişim",
              "url": "https://www.olydent.com"
            }
          `}
        </script>
      </Helmet>

      <div className="container mt-5 d-flex justify-content-center">
        <h1>İletişim</h1>
      </div>

      <div>
        <GoogleMap />
      </div>
    </div>
  );
}
export default Iletişim;

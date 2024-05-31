import Doctors from "../Components/doctors/Doctors";
import { Helmet } from "react-helmet";
export default function Staff() {
  return (
    <div className="mt-5 mb-5">
      <Helmet>
        <title>Kadromuz - Olydent Diş Kliniği</title>
        <meta
          name="description"
          content=" Bayrampaşa Olydent Diş Kliniği uzman doktorlarımız."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Doktorlarımız",
              "url": "https://www.olydent.com"
            }
          `}
        </script>
      </Helmet>
      <Doctors />
    </div>
  );
}

import Services from "../Components/services/Services";
import "./Hakkımızda.css";

function Hakkımızda() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-center align-content-center">
              <img
                className="d-flex justify-content-center align-content-center"
                style={{ width: "33rem", height: "35rem" }}
                src="/A1A07714.JPG"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h1>Hakkımızda</h1>
            </div>
            <br />
            <br />

            <div>
              <h6 className="">
                Hastalarımızın hak ettiği en kapsamlı ve en iyi diş tedavisini
                sağlama noktasında yetenekli ve tecrübeli diş hekimleriyle
                kurulu bir kadroya sahiptir. Kliniğimiz, nitelikli bir çok dilde
                hizmet verebilen, güler yüzlü bir ekibe sahip olmakla birlikte
                inovatif tekiklerle sizlere hizmet vermektedir. OlyDent Diş
                Kliniği Gülüş Tasarımı, Hollywood Smile, Bonding, İmplant ve
                Diğer Tüm Kapsayıcı/koruyucu tedavileri sizlere sunmaktadır.
              </h6>
            </div>
            <br />

            <div>
              <h1>Vizyon ve Misyon</h1>
            </div>
            <br />
            <br />
            <div>
              <h6 className="">
                Tüm hastalarımıza modern, samimi ve profesyonel bir ortamda en
                yüksek standartlarda diş tedavi ve bakımını sağlamak birinci
                önceliğimizdir. Hastalarımızın önceliklerini anlayıp doğru
                iletişim kurarak, gerekli çözümler özelinde sağlıklı
                gülümsemelerini yeniden kazandırmak, kliniğimizin esas
                değerlerindendir.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <Services />
      </div>
    </>
  );
}

export default Hakkımızda;

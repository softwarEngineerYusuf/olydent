import "./Services.css";
function Services() {
  return (
    <>
      <div>
        <div className="servicesh1">
          <h1>Diş Kliniği Hizmetleri</h1>
        </div>
        <hr />
        <div className="serviceshP">
          <p>Olydent Bayrampaşa Diş Kliniği olarak,</p>
          <p>Hastalarımızın önceliklerini anlayıp doğru iletişimi kurarak,</p>
          <p>gerekli çözümler kurmak önceliğimizdir.</p>
        </div>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "18rem",
        }}
      >
        <div className="row mt-5">
          <div className="col-md-4 mt-5">
            <div className=" servicesCard">
              <div className="servicesIcon" style={{ marginTop: "3rem" }}>
                <img
                  src="https://olydent.com/wp-content/uploads/2022/09/dental-implant.webp"
                  alt=""
                />
              </div>
              <div className="baslık" style={{ marginTop: "1rem" }}>
                <h2>Diş İmplantı</h2>
              </div>
              <div className="aciklama">
                <div className="acıklamaAltDiv">
                  <p>
                    Sağlıklı uygulamalarla yalnız eksik dişlerinizi
                    doldurmayacak aynı zamanda hayat standartınızı artıracak
                    profesyonel implant uygulaması için Bayrampaşa Diş
                    Kliniğimize bekliyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className=" servicesCard">
              <div className="servicesIcon" style={{ marginTop: "3rem" }}>
                <img
                  src="https://olydent.com/wp-content/uploads/2022/08/parlak-dis-logo.webp"
                  alt=""
                />
              </div>
              <div className="baslık" style={{ marginTop: "1rem" }}>
                <h2>Diş Estetiği</h2>
              </div>
              <div className="aciklama">
                <div className="acıklamaAltDiv">
                  <p>
                    Sağlıklı uygulamalarla yalnız eksik dişlerinizi
                    doldurmayacak aynı zamanda hayat standartınızı artıracak
                    profesyonel implant uygulaması için Bayrampaşa Diş
                    Kliniğimize bekliyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className=" servicesCard">
              <div className="servicesIcon" style={{ marginTop: "3rem" }}>
                <img
                  src="https://olydent.com/wp-content/uploads/2022/08/kanal-tedavisi-icon.webp"
                  alt=""
                />
              </div>
              <div className="baslık" style={{ marginTop: "1rem" }}>
                <h2>Kanal Tedavisi</h2>
              </div>
              <div className="aciklama">
                <div className="acıklamaAltDiv">
                  <p>
                    Sağlıklı uygulamalarla yalnız eksik dişlerinizi
                    doldurmayacak aynı zamanda hayat standartınızı artıracak
                    profesyonel implant uygulaması için Bayrampaşa Diş
                    Kliniğimize bekliyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className=" servicesCard">
              <div className="servicesIcon" style={{ marginTop: "3rem" }}>
                <img
                  src="https://olydent.com/wp-content/uploads/2022/08/dis-beyazlatma-ikon.webp"
                  alt=""
                />
              </div>
              <div className="baslık" style={{ marginTop: "1rem" }}>
                <h2>Diş Beyazlatma</h2>
              </div>
              <div className="aciklama">
                <div className="acıklamaAltDiv">
                  <p>
                    Sağlıklı uygulamalarla yalnız eksik dişlerinizi
                    doldurmayacak aynı zamanda hayat standartınızı artıracak
                    profesyonel implant uygulaması için Bayrampaşa Diş
                    Kliniğimize bekliyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className=" servicesCard">
              <div className="servicesIcon" style={{ marginTop: "3rem" }}>
                <img
                  src="https://olydent.com/wp-content/uploads/2022/08/parlak-dis-logo.webp"
                  alt=""
                />
              </div>
              <div className="baslık" style={{ marginTop: "1rem" }}>
                <h2>Panoramik Röntgen</h2>
              </div>
              <div className="aciklama">
                <div className="acıklamaAltDiv">
                  <p>
                    Sağlıklı uygulamalarla yalnız eksik dişlerinizi
                    doldurmayacak aynı zamanda hayat standartınızı artıracak
                    profesyonel implant uygulaması için Bayrampaşa Diş
                    Kliniğimize bekliyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className=" servicesCard">
              <div className="servicesIcon" style={{ marginTop: "3rem" }}>
                <img
                  src="https://olydent.com/wp-content/uploads/2022/08/kanal-tedavisi-icon.webp"
                  alt=""
                />
              </div>
              <div className="baslık" style={{ marginTop: "1rem" }}>
                <h2>Diş Teli Tedavisi</h2>
              </div>
              <div className="aciklama">
                <div className="acıklamaAltDiv">
                  <p>
                    Sağlıklı uygulamalarla yalnız eksik dişlerinizi
                    doldurmayacak aynı zamanda hayat standartınızı artıracak
                    profesyonel implant uygulaması için Bayrampaşa Diş
                    Kliniğimize bekliyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

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
                <div className="acıklamaAltDiv  ">
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
                    Kliniğimizde gülüş tasarımı, Hollywood Smile, Bonding,
                    İmplant ve aynı zamanda diğer tüm kapsayıcı koruyucu
                    tedavileri sizlere sunmaktadır.
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
                    Kanal tedavisi çeşitli sebeplere bağlı olarak enfekte olmuş
                    dişleri kurtarmak için uygulanan bir tedavi yöntemidir. Bu
                    sebeple diş tedavisinde önemli bir yer tutar.
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
                    Klinik ortamında doktor hastanın dişine uygun bir diş
                    beyazlatma jelini ve ısı ve ultraviyole ışık yardımı ile
                    uygulama gerçekleştirilir. Böylece temizlenen diş
                    cilalanarak diş beyazlatma işi tamamlanır.
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
                    Tek bir uygulama ile diş hekimlerinin ağzınızın tamamını
                    kapsamlı göre-bilmesini sağlayan bu yöntem siz değerli
                    hastalarımıza aynı zamanda en iyi ve en hızlı hizmeti
                    sunabilmemiz için çok değerli bir uygulamadır. Bu nedenle
                    doktorlar arasında yaygın olarak tercih edilmektedir.
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
                    Diş ve çene eklemlerindeki düzensizliklerde, dişler arasında
                    olmaması gereken boşlukların giderilmesinde ve aynı zamanda
                    gülüş tasarımında gerekli olan tedavilerin uygulanabilir
                    hale getirilmesi noktalarında uygulanan bir tedavi
                    sürecidir.
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

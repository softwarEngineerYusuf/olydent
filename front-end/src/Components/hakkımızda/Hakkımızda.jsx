import "./Hakkımızda.css";
function Hakkımızda() {
  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div
          className="MainPage row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-6" style={{ width: "550px", height: "500px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530994_1280.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6" style={{ marginTop: "5rem" }}>
            <h1>BAYRAMPAŞA DİŞ KLİNİĞİ</h1>
            <br />
            <hr />
            <br />
            <h1>HAKKIMIZDA</h1>
            <br />
            <p>
              Olydent Bayrampaşa Diş Kliniği hastalarımızın hak ettiği en
              kapsamlı ve en iyi diş tedavisini sağlamak için kurulmuştur.
              belirtmek isteriz ki kliniğimiz alanında yetenekli ve tecrübeli
              diş hekimlerinden oluşan bir kadroya sahiptir. Ayrıca diş
              kliniğimizde nitelikli bir çok dilde hizmet verebilen, güler yüzlü
              bir ekip bulunmaktadır. Bunun yanında inovatif tekiklerle sizlere
              en kaliteli hizmet sunulmaktadır. Güzel bir hizmet arıyorsanız
              OlyDent Bayrampaşa Diş Kliniği Gülüş Tasarımı, Hollywood Smile,
              Bonding, İmplant ve Diğer Tüm Kapsayıcı/koruyucu tedavileri
              sizlere sunmakta ve %100 müşteri memnuniyetini amaçlamaktadır.
            </p>
            <div className="bilgiButonDiv">
              <button className="bilgiButton">Daha Fazla Bilgi</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hakkımızda;

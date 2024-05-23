import { useEffect, useRef } from "react";
import "./HakkımızdaComponent.css";

function Hakkımızda() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Görünürlüğün %50'sinde tetiklenecek
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-left");
          imageObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-right");
          textObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="MainPage row"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          ref={imageRef}
          className="col-md-6 hidden"
          style={{ width: "550px", height: "600px" }}
        >
          <img
            style={{ width: "100%", height: "100%", borderRadius:"4rem" }}
            src="/olydent.JPG"
            alt=""
          />
        </div>
        <div
          ref={textRef}
          className="col-md-6 hidden"
          style={{ marginTop: "5rem" }}
        >
          <h1>BAYRAMPAŞA DİŞ KLİNİĞİ</h1>
          <br />
          <hr />
          <br />
          <h1>HAKKIMIZDA</h1>
          <br />
          <p>
            Olydent Bayrampaşa Diş Kliniği hastalarımızın hak ettiği en kapsamlı
            ve en iyi diş tedavisini sağlamak için kurulmuştur. belirtmek
            isteriz ki kliniğimiz alanında yetenekli ve tecrübeli diş
            hekimlerinden oluşan bir kadroya sahiptir. Ayrıca diş kliniğimizde
            nitelikli bir çok dilde hizmet verebilen, güler yüzlü bir ekip
            bulunmaktadır. Bunun yanında inovatif tekiklerle sizlere en kaliteli
            hizmet sunulmaktadır. Güzel bir hizmet arıyorsanız OlyDent
            Bayrampaşa Diş Kliniği Gülüş Tasarımı, Hollywood Smile, Bonding,
            İmplant ve Diğer Tüm Kapsayıcı/koruyucu tedavileri sizlere sunmakta
            ve %100 müşteri memnuniyetini amaçlamaktadır.
          </p>
          <div className="bilgiButonDiv">
            <button className="bilgiButton">Daha Fazla Bilgi</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hakkımızda;

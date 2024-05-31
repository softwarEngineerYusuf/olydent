import { useEffect, useState, useRef } from "react";
import "./Services.css";
import DisEstetigi from "../../assets/DisEstetigi.png";
import KanalTedavi from "../../assets/KanalTedavi.png";
import DisBeyazlatma from "../../assets/DisBeyazlatma.png";
import CocukDis from "../../assets/CocukDis.png";
import DisTeli from "../../assets/DisTeli.png";
import DisEti from "../../assets/DisEti.png";
import Ortodonti from "../../assets/Ortadonti.png";
import Bruksizm from "../../assets/Bruksizm.png";
import Implant from "../../assets/Implant.png";

function Services() {
  const cardRefs = useRef([]);
  const [services] = useState([
    {
      style: {
        iconBackgroundColor: "#F6F9F9",
        marginTop: "3rem",
        width: "100px",
        cardMarginTop: "1rem",
      },
      src: Implant,
      title: "İmplant Tedavisi",
      description:
        "Sağlıklı uygulamalarla yalnız eksik dişlerinizi doldurmayacak aynı zamanda hayat standartınızı artıracak profesyonel implant uygulaması için Bayrampaşa Diş Kliniğimize bekliyoruz.",
    },
    {
      style: {
        iconBackgroundColor: "#F6F9F9",
        marginTop: "3rem",
        width: "100px",
        cardMarginTop: "1rem",
      },
      src: DisEstetigi,
      title: "Estetik Diş Hekimliği",
      description:
        "Kliniğimizde gülüş tasarımı, Hollywood Smile, Bonding, İmplant ve aynı zamanda diğer tüm kapsayıcı koruyucu tedavileri sizlere sunmaktadır.",
    },
    {
      style: {
        iconBackgroundColor: "#F6F9F9",
        marginTop: "3rem",
        width: "100px",
        cardMarginTop: "1rem",
      },
      src: KanalTedavi,
      title: "Kanal Tedavisi",
      description:
        "Kanal tedavisi çeşitli sebeplere bağlı olarak enfekte olmuş dişleri kurtarmak için uygulanan bir tedavi yöntemidir. Bu sebeple diş tedavisinde önemli bir yer tutar.",
    },
    {
      style: {
        iconBackgroundColor: "#F6F9F9",
        marginTop: "3rem",
        width: "100px",
        cardMarginTop: "1rem",
      },
      src: DisBeyazlatma,
      title: "Diş Beyazlatma",
      description:
        "Klinik ortamında doktor hastanın dişine uygun bir diş beyazlatma jelini ve ısı ve ultraviyole ışık yardımı ile uygulama gerçekleştirilir. Böylece temizlenen diş cilalanarak diş beyazlatma işi tamamlanır.",
    },
    {
      style: {
        iconBackgroundColor: "#F6F9F9",
        marginTop: "3rem",
        width: "100px",
        cardMarginTop: "1rem",
      },
      src: CocukDis,
      title: "Çocuk Diş Hekimliği",
      description:
        "Tek bir uygulama ile diş hekimlerinin ağzınızın tamamını kapsamlı göre-bilmesini sağlayan bu yöntem siz değerli hastalarımıza aynı zamanda en iyi ve en hızlı hizmeti sunabilmemiz için çok değerli bir uygulamadır. Bu nedenle doktorlar arasında yaygın olarak tercih edilmektedir.",
    },
    {
      style: {
        iconBackgroundColor: "#F6F9F9",
        marginTop: "3rem",
        width: "100px",
        cardMarginTop: "1rem",
      },
      src: DisTeli,
      title: "Diş Teli Tedavisi",
      description:
        "Diş ve çene eklemlerindeki düzensizliklerde, dişler arasında olmaması gereken boşlukların giderilmesinde ve aynı zamanda gülüş tasarımında gerekli olan tedavilerin uygulanabilir hale getirilmesi noktalarında uygulanan bir tedavi sürecidir.",
    },
    {
      style: {
        iconBackgroundColor: "#F6F9F9",
        marginTop: "3rem",
        width: "100px",
        cardMarginTop: "1rem",
      },
      src: DisEti,
      title: "Diş Eti Tedavisi",
      description:
        "Diş ve çene eklemlerindeki düzensizliklerde, dişler arasında olmaması gereken boşlukların giderilmesinde ve aynı zamanda gülüş tasarımında gerekli olan tedavilerin uygulanabilir hale getirilmesi noktalarında uygulanan bir tedavi sürecidir.",
    },
    {
      style: {
        iconBackgroundColor: "#F6F9F9",
        marginTop: "3rem",
        width: "100px",
        cardMarginTop: "1rem",
      },
      src: Ortodonti,
      title: "Ortodonti",
      description:
        "Diş ve çene eklemlerindeki düzensizliklerde, dişler arasında olmaması gereken boşlukların giderilmesinde ve aynı zamanda gülüş tasarımında gerekli olan tedavilerin uygulanabilir hale getirilmesi noktalarında uygulanan bir tedavi sürecidir.",
    },
    {
      style: {
        iconBackgroundColor: "#F6F9F9",
        marginTop: "3rem",
        width: "100px",
        cardMarginTop: "1rem",
      },
      src: Bruksizm,
      title: "Bruksizm Tedavisi",
      description:
        "Diş ve çene eklemlerindeki düzensizliklerde, dişler arasında olmaması gereken boşlukların giderilmesinde ve aynı zamanda gülüş tasarımında gerekli olan tedavilerin uygulanabilir hale getirilmesi noktalarında uygulanan bir tedavi sürecidir.",
    },
  ]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Görünürlüğün %10'unda tetiklenecek
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

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
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mt-5">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="servicesCard hidden"
              >
                <div
                  className="servicesIcon"
                  style={{
                    marginTop: service.style.marginTop,

                    backgroundColor: service.style.iconBackgroundColor,
                  }}
                >
                  <img
                    src={service.src}
                    alt={service.title}
                    style={{ width: service.style.width }}
                  />
                </div>
                <div className="baslık" style={{ marginTop: "1rem" }}>
                  <h2>{service.title}</h2>
                </div>
                <div className="aciklama">
                  <div className="acıklamaAltDiv">
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;

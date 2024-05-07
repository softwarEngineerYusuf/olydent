import "./Footer.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

function Footer() {
  return (
    <div style={{ backgroundColor: "#F6F9F9" }}>
      <div className="">
        <div className="d-flex justify-content-center align-content-center  pt-5">
          <h3>Copyright 2022 © OlyDent - Tüm Hakları Saklıdır</h3>
        </div>

        <div className="d-flex justify-content-center align-content-center">
          Diş Beyazlatma, Protez Diş, İmplant, Porselen Diş, Kanal Tedavisi, Diş
          Dolgusu, Ortodonti, Diş Kaplama, Zirkonyum Kaplama, Zirkon, Diş Teli,
          Şeffaf Plak, Bayrampaşa Diş Klinik, Bayrampaşa Dişçi, Gülüş Tasarımı,
          Hollywood Smile, Diş Kliniği, Dişçi, Ali Fuat Başgil Diş
        </div>
      </div>

      <div className="mt-5" style={{ padding: "0px 5rem" }}>
        <div className="row">
          <div className="col-md mt-5 d-flex justify-content-center align-items-center ">
            <img
              src="https://olydent.com/wp-content/uploads/2023/03/logo.png"
              alt=""
            />
          </div>

          <div className="col-md mt-5">
            <div className="d-flex justify-content-center align-items-center ">
              <h3>Bize Ulaşın</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              +90 531 964 2737
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              {" "}
              +90 212 640 6061
            </div>
          </div>

          <div className="col-md mt-5">
            <div className="d-flex justify-content-center align-items-center ">
              <h3>Adres</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              Yıldırım Mah. Ali Fuat Başgil Cad. No:122/A
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              Bayrampaşa İstanbul
            </div>
          </div>

          <div className="col-md mt-5 ">
            <div className="d-flex justify-content-center align-items-center ">
              <h3>Çalışma Saatlerimiz</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              Pzt-Cum 10:00 – 21:00
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              Cumartesi 10:00 – 17:00
            </div>
          </div>

          <div className="col-md d-flex flex-column justify-content-center  align-content-center mt-5">
            <div className="d-flex justify-content-center align-items-center ">
              Bizi Takip Edin
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <a
                type="button"
                href="https://www.instagram.com/olydentklinik/"
                className="me-2"
              >
                <img src={instagram} alt="" style={{ width: "40px" }} />
              </a>
              <a type="button" href="https://www.facebook.com/olydentklinik">
                <img src={facebook} alt="" style={{ width: "40px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex   justify-content-center align-content-center mt-5  pb-5  "
        style={{ padding: "0  7rem" }}
      >
        <div
          className="row  d-flex   justify-content-center align-content-center  "
          style={{ width: "100%" }}
        >
          <div className="col-md d-flex   justify-content-center align-content-center mt-3">
            <a href="#">Bayrampaşa Diş Kliniği</a>
          </div>
          <div className="col-md d-flex justify-content-center align-content-center mt-3">
            <a href="#">Diş Eti Hastalıkları</a>
          </div>
          <div className="col-md d-flex justify-content-center align-content-center mt-3">
            <a href="#">Zirkonyum Diş</a>
          </div>
          <div className="col-md d-flex justify-content-center align-content-center mt-3">
            <a href="#">Diş İmplantı</a>
          </div>
          <div className="col-md d-flex justify-content-center align-content-center mt-3">
            <a href="#">Kanal Tedavisi</a>
          </div>
          <div className="col-md d-flex justify-content-center align-content-center mt-3">
            <a href="#">Gülüş Tasarımı</a>
          </div>
          <div className="col-md d-flex justify-content-center align-content-center mt-3">
            <a href="#">Seramik Diş Teli</a>
          </div>
          <div className="col-md d-flex justify-content-center align-content-center mt-3">
            <a href="#">Hakkımızda</a>
          </div>
          <div className="col-md d-flex justify-content-center align-content-center mt-3">
            <a href="#">İletişim</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

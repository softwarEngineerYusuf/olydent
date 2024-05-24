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
        </div>
      </div>
    </div>
  );
}

export default Footer;

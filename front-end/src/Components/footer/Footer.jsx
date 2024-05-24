import "./Footer.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

function Footer() {
  return (
    <div style={{ backgroundColor: "#212529" }}>
      <div className="">
        <div className="d-flex justify-content-center align-content-center  pt-5" style={{color:"white"}}>
          <h3>Copyright 2022 © OlyDent - Tüm Hakları Saklıdır</h3>
        </div>

        <div className="d-flex justify-content-center align-content-center" style={{color:"white"}}>
        <h6>
        Diş Beyazlatma, Protez Diş, İmplant, Porselen Diş, Kanal Tedavisi, Diş
          Dolgusu, Ortodonti, Diş Kaplama, Zirkonyum Kaplama, Zirkon, Diş Teli,
          Şeffaf Plak, Bayrampaşa Diş Klinik, Bayrampaşa Dişçi, Gülüş Tasarımı,
          Hollywood Smile, Diş Kliniği, Dişçi, Ali Fuat Başgil Diş
        </h6>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5  align-content-center " >
      <div className="d-flex justify-content-center mt-2   align-content-center mb-5">
            <a type="button" href="https://www.instagram.com/olydentklinik/">
              <img
                src={instagram}
                alt=""
                style={{ width: "40px", marginRight: "1.5rem" }}
              />
            </a>
            <a type="button" href="https://www.facebook.com/olydentklinik">
              <img src={facebook} alt="" style={{ width: "40px" }} />
            </a>
          </div>
      </div>
      
    </div>
  );
}

export default Footer;

import "./Doctors.css";
import Doktor1 from "../../assets/Doktor1.jpeg";
import Doktor2 from "../../assets/Doktor.2.jpeg";
function Doctors() {
  return (
    <>
      <hr />
      <div className=" container doktors">
        <div>
          <h1>DOKTORLARIMIZ</h1>
          <hr />
        </div>

        <div className="row doktorsRow ">
          <div
            className="col-md-4 col-sm-12 doktorsCard "
            style={{ marginRight: "3rem", marginLeft: "2rem" }}
          >
            <img src={Doktor1} alt="" />
            <div className="doktorsH1Div">
              <h4>Hakan Kayhan</h4>
            </div>
            <div className="doktorsP">
              <p>
              Diş Hekimi Hakan Kayhan 2019 yılında Bezmialem Vakıf Üniversitesi Diş Hekimliği Fakültesinden mezun oldu. 3 yıl süreyle çeşitli hastane ve polikliniklerde diş hekimliği yaptı. 2022 yılında Olydent ailesinin kurucuları arasına katıldı. Bu tarihten itibaren Olydent çatısı altında diş hekimliği mesleğini sürdürmektedir. Hakan Kayhan Protez uygulamaları ve Gülüş tasarımı alanlarında aldığı eğitimler ve edindiği
              tecrübelerle hastalarımıza hakettikleri gülüşü kazanmaları için yardımcı olmaktadır.
              </p>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-12 doktorsCard"
            style={{ marginLeft: "2.5rem", marginRight: "2rem" }}
          >
            <img src={Doktor2} alt="" />
            <div className="doktorsH1Div">
              <h4>Mert Sakarya</h4>
            </div>
            <div className="doktorsP">
              <p>
              Diş Hekimi Mert Sakarya, Bezmialem Vakıf Üniversitesi Diş Hekimliği bölümünden mezun olmuştur. 3 yıl kadar kendi muayenesinde diş hekimi olarak çalıştıktan sonra 2022 yılında Olydent ailesinin kuruşlar arasına katılmıştır. Bu tarihten itibaren Olydent çatısı altında diş hekimliği mesleğini sürdürmektedir. Mert Sakarya implant ve protez uygulamaları alanında edindiği bilgi birikimle hastalarımızın yeniden sağlıklı ve mutlu gülüşlere kavuşmaları için yardımcı olmaktadır.
  
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctors;

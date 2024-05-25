import "./Doctors.css";

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
            <img
              src="https://olydent.com/wp-content/uploads/2022/06/dis-doktoru-hakan-kayhan.webp"
              alt=""
            />
            <div className="doktorsH1Div">
              <h4>Hakan Kayhan</h4>
            </div>
            <div className="doktorsP">
              <p>
                Diş Kozmetiği genelde diş beyazlatma, kaplamalar gibi diş
                yüzeyindeki diş işleri ile ilgilenme eğilimindedir. Oysa ki
                estetik daha derinlemesine değerlendirilmeli, diş problemleri
                düzeltilmeli, implant, kron gibi işlemlerle bir ağız bakımı
                gerçekleştirilmelidir.
              </p>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-12 doktorsCard"
            style={{ marginLeft: "2.5rem", marginRight: "2rem" }}
          >
            <img
              src="blob:https://web.whatsapp.com/8e2ee417-06de-4efb-be4c-2687ad3d22d9"
              alt=""
            />
            <div className="doktorsH1Div">
              <h4>Mert Sakarya</h4>
            </div>
            <div className="doktorsP">
              <p>
                Estetik Diş Hekimliği, diş tedavisinde bilim ve sanatın
                birleştiği yerdir. Aynı zamanda belirli bir tedavi disiplini
                veya türü olmaktan ziyade estetik, fonksiyonel ve biyolojik
                açıdan hasta için en iyi sonucu yaratmak amacıyla tüm diş tedavi
                disiplinlerini kapsar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctors;

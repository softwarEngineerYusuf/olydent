import "./Carousell.css";
import { Carousel } from "antd";
import OlydentVideo1 from "../../assets/OlydentVideo1.mp4";
import OlydentVideo2 from "../../assets/OlydentVideo2.mp4";
import OlydentVideo3 from "../../assets/OlydentVideo3.mp4";
// import OlydentVideo4 from "../../assets/OlydentVideo4.mp4";

function Carousell() {
  return (
    <>
      <div className="container mt-3 mb-5">
        <Carousel className="carousell" autoplay>
          <div>
            <video autoPlay muted loop>
              <source src={OlydentVideo2} type="video/mp4" />
            </video>
          </div>
          <div>
            <video autoPlay muted loop>
              <source src={OlydentVideo1} type="video/mp4" />
            </video>
          </div>
          <div>
            <video autoPlay muted loop>
              <source src={OlydentVideo3} type="video/mp4" />
            </video>
          </div>
          {/* <div>
            <video autoPlay muted loop>
              <source src={OlydentVideo4} type="video/mp4" />
            </video>
          </div> */}
        </Carousel>
      </div>
    </>
  );
}

export default Carousell;
{
  /* <video className="d-block w-100" autoPlay muted loop>
<source src={Video} type="video/mp4" />
</video> */
}

{
  /* <div className="carousel-caption ">
<h4>Ağız Sağlığınızı Önemsiyoruz. Çünkü siz değerlisiniz...</h4>
<br />
<hr style={{ width: "25%" }} />
<br />
<br />
<h1>Diş Sağlığınız İçin En İyi Tercih, Olydent.</h1>
<br />
<hr style={{ width: "25%" }} />
<br />
<p>
  Olydent Bayrampaşa Diş Kliniğimiz, alanında uzman ve deneyimli
  hekimlerim kadrosuyla siz değerli hastalarımıza en iyi hizmeti
  sunabilmek için kurulmuştur.
</p>
</div> */
}

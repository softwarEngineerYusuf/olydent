import "./Carousel.css";
import Video from "../../assets/Video.mp4";
import Video1 from "../../assets/Video1.mp4";

function Carousel() {
  return (
    <>
      <div className="carousel-caption">
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
      </div>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active  ">
            <video className="d-block w-100" autoPlay muted loop>
              <source src={Video1} type="video/mp4" />
            </video>
          </div>
          <div className="carousel-item">
            <video className="d-block w-100" autoPlay muted loop>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <div className="carousel-item">
            <video className="d-block w-100" autoPlay muted loop>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;

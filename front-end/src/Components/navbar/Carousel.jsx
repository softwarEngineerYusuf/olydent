import "./Carousel.css";
import Video from "../../assets/Video.mp4";
import Video2 from "../../assets/Video2.mp4";

function Carousel() {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active  ">
            <video className="d-block w-100" autoPlay muted loop>
              <source src={Video2} type="video/mp4" />
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

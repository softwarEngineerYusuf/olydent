import Carousel from "./Carousel";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="carousel-wrapper">
      {/* Navbar */}
      <div className="navigationBar">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          style={{ "--bs-bg-opacity": 0 }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://olydent.com/wp-content/uploads/2023/03/logo.png"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
              style={{ justifyContent: "flex-end" }}
            >
              <div className="navbar-nav" style={{ marginRight: "2rem" }}>
                <a
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "black",
                  }}
                  className="nav-link active Navbarlink"
                  aria-current="page"
                  href="#"
                >
                  Olydent Bayrampaşa Diş Kliniği
                </a>
                <a
                  className="nav-link Navbarlink"
                  href="#"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "black",
                  }}
                >
                  Kadromuz
                </a>
                <a
                  className="nav-link Navbarlink"
                  href="#"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "black",
                  }}
                >
                  Hakkımızda
                </a>
                <a
                  className="nav-link Navbarlink"
                  href="#"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "black",
                  }}
                >
                  Blog
                </a>
                <a
                  className="nav-link Navbarlink"
                  href="#"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "black",
                  }}
                >
                  İletişim
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Carousel */}
      <div className="carouselNavbar">
        <Carousel />
      </div>
    </div>
  );
}

export default Navbar;

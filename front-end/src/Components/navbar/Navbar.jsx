import "./Navbar.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { FaTooth } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    if (newOpen) {
      setTimeout(() => {
        setShowLinks(true);
      }, 50);
    } else {
      setShowLinks(false);
    }
  };

  const links = [
    { text: "Olydent Diş Kliniği", href: "/", className: "link5" },
    { text: "Kadromuz", href: "/", className: "link4" },
    { text: "Hakkımızda", href: "/hakkımızda", className: "link3" },
    { text: "Blog", href: "/", className: "link2" },
    { text: "İletişim", href: "/", className: "link1" },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 250, backgroundColor: "#212529" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="drawerBox"
    >
      <div
        className={`container ${showLinks ? "showLinks" : ""} navbarLinkDiv`}
        style={{ marginTop: "5rem" }}
      >
        {links.map((link) => (
          <a
            key={link.text}
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",

              position: "relative",
              padding: "0.65rem 0.75rem",
              display: "block",
              color: "white",
            }}
            className={`nav-link active Navbarlink ${link.className}`}
            aria-current="page"
            href={link.href}
          >
            {link.text}
            <span className="highlight"></span>
          </a>
        ))}
      </div>
    </Box>
  );

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  container  bg-body-tertiary"
        // style={{ backgroundColor: "#212529" }}
      >
        <div className="container-fluid  ">
          <div
            className="d-flex justify-content-center  align-content-center"
            style={{ marginLeft: "3rem" }}
          >
            <Button onClick={toggleDrawer(true)} style={{}}>
              <FaTooth
                style={{
                  width: "50px",
                  height: "50px",
                  color: "#004dff",
                }}
              />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mt-1 " id="navbarNav">
            <ul
              className="navbar-nav d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <li className="nav-item mt-2">
                <a className="navbar-brand" href="/">
                  <img
                    src="https://olydent.com/wp-content/uploads/2023/03/logo.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="nav-item mt-2 ">
                <button
                  onClick={() => {
                    navigate("randevu");
                  }}
                  className="button-92"
                  role="button"
                >
                  Randevu al
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// import "./Navbar.css";
// import { useState } from "react";
// import { MagicTabSelect } from "react-magic-motion";
// import Carousel from "./Carousel.jsx";

// function Navbar() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const links = [
//     { text: "Olydent Diş Kliniği", href: "/" },
//     { text: "Kadromuz", href: "#" },
//     { text: "Hakkımızda", href: "/hakkımızda" },
//     { text: "Blog", href: "#" },
//     { text: "İletişim", href: "#" },
//   ];
//   return (
//     <>
//       <div className="carousel-wrapper">
//         {/* Navbar */}
//         <div className="navigationBar">
//           <nav
//             className="navbar navbar-expand-lg bg-body-tertiary"
//             style={{ "--bs-bg-opacity": 0 }}
//           >
//             <div className="container-fluid">
//               <a className="navbar-brand" href="/">
//                 <img
//                   src="https://olydent.com/wp-content/uploads/2023/03/logo.png"
//                   alt=""
//                 />
//               </a>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNavAltMarkup"
//                 aria-controls="navbarNavAltMarkup"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div
//                 className="collapse navbar-collapse"
//                 id="navbarNavAltMarkup"
//                 style={{ justifyContent: "flex-end" }}
//               >
//                 <div className="navbar-nav" style={{ marginRight: "2rem" }}>
//                   {links.map((link, index) => (
//                     <a
//                       key={link.text}
//                       className="nav-link active Navbarlink"
//                       aria-current="page"
//                       href={link.href}
//                       onMouseEnter={() => setHoveredIndex(index)}
//                       onMouseLeave={() => setHoveredIndex(null)}
//                       style={{
//                         fontWeight: "bold",
//                         fontSize: "1.2rem",
//                         color: "black",
//                         position: "relative",
//                         padding: "0.65rem 0.75rem",
//                       }}
//                     >
//                       {hoveredIndex === index && (
//                         <MagicTabSelect
//                           id="navbarLinks"
//                           transition={{ type: "spring", bounce: 0.35 }}
//                         >
//                           <span
//                             style={{
//                               borderRadius: "999px",
//                               position: "absolute",
//                               top: 0,
//                               left: 0,
//                               right: 0,
//                               bottom: 0,
//                               zIndex: -1,
//                               backgroundColor: "white",
//                               mixBlendMode: "difference",
//                             }}
//                           />
//                         </MagicTabSelect>
//                       )}
//                       {link.text}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>

//         {/* Carousel */}
//         <div className="carouselNavbar container">
//           <Carousel />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

{
  /* <div className="navBar ">
<div
  className="d-flex justify-content-center align-content-center"
  style={{ border: "1px solid black " }}
>
  <Button onClick={toggleDrawer(true)}>Button</Button>
  <Drawer open={open} onClose={toggleDrawer(false)}>
    {DrawerList}
  </Drawer>
</div>

<div
  className="d-flex navBarLink"
  style={{ border: "1px solid red", width: "60%" }}
>
  <div className="navIcon">
    <a className="navbar-brand" href="/">
      <img
        src="https://olydent.com/wp-content/uploads/2023/03/logo.png"
        alt=""
      />
    </a>
  </div>
  <div className="navIcon">
    {/* <button className="navButton">Randevu Al</button> */
}
//     <button className="button-92" role="button">
//       Randevu al
//     </button>
//   </div>
// </div>
// </div>
// <div className="carouselNavbar container">
// <Carousel />
// </div> */}

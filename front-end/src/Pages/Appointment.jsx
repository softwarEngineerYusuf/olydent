import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./Appointment.css";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Carousel } from "antd";

const contentStyle = {
  height: "600px",
  textAlign: "center",
  width: "500px",
};

function Appointment() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [doctor, setDoctor] = useState("");
  const [request, setRequest] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "Bu alan zorunludur.";
    tempErrors.phone = phone ? "" : "Bu alan zorunludur.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };
  //axioss
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ name, phone, doctor, request });
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/randevus",
          {
            name,
            phone,
            doctor,
            request,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="mb-5">
      <Helmet>
        <title>Randevu-Olydent Diş Kliniği</title>
        <meta
          name="description"
          content=" Olydent Bayrampaşa Diş Kliniğine hemen randevu alın."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Randevu",
              "url": "https://www.olydent.com"
            }
          `}
        </script>
      </Helmet>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 order-2 order-md-1"
            style={{
              marginTop: "4rem",
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <h1>Randevu İçin</h1>
            </div>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Adınız Soyadınız"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>
            <div>
              <TextField
                style={{ width: "100%", marginTop: "3rem" }}
                id="outlined-basic"
                label="Telefon"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </div>

            <div>
              <FormControl fullWidth style={{ marginTop: "3rem" }}>
                <InputLabel id="doctor-label">Doktor</InputLabel>
                <Select
                  labelId="doctor-label"
                  id="doctor-select"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  label="Doktor"
                >
                  <MenuItem value="">
                    <em>Seçiniz</em>
                  </MenuItem>
                  <MenuItem value="Mert Sakatya">Mert Sakarya</MenuItem>
                  <MenuItem value="Izaura Sadıkova">Izaura Sadıkova</MenuItem>
                  <MenuItem value="Hakan Kayhan">Hakan Kayhan</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl fullWidth style={{ marginTop: "3rem" }}>
                <InputLabel id="request-label">Talebiniz</InputLabel>
                <Select
                  labelId="request-label"
                  id="request-select"
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  label="Talebiniz"
                >
                  <MenuItem value="">
                    <em>Seçiniz</em>
                  </MenuItem>
                  <MenuItem value="Muayene">Muayene</MenuItem>
                  <MenuItem value="Devam Eden Tedavi">
                    Devam Eden Tedavi
                  </MenuItem>
                  <MenuItem value="Diş Estetiği">Diş Estetiği</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <button
                className="button-71"
                role="button"
                onClick={handleSubmit}
              >
                Randevu Al
              </button>
            </div>
          </div>

          <div
            className="col-md-6 order-1 order-md-2 "
            style={{ marginTop: "4rem" }}
          >
            <div className="carousel-container">
              <Carousel autoplay>
                <div>
                  <img
                    className="carousel-image"
                    style={contentStyle}
                    src="/olydent.JPG"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousel-image"
                    style={contentStyle}
                    src="/A1A07723.JPG"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousel-image"
                    style={contentStyle}
                    src="/A1A07714.JPG"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;

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
  return (
    <div className="mb-5">
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
              />
            </div>
            <div>
              <TextField
                style={{ width: "100%", marginTop: "3rem" }}
                id="outlined-basic"
                label="Telefon"
                variant="outlined"
              />
            </div>

            <div>
              <FormControl fullWidth style={{ marginTop: "3rem" }}>
                <InputLabel id="demo-simple-select-label">Doktor</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Mert Sakatya</MenuItem>
                  <MenuItem value={20}>Izaura Sadıkova</MenuItem>
                  <MenuItem value={30}>Hakan Kayhan</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl fullWidth style={{ marginTop: "3rem" }}>
                <InputLabel id="demo-simple-select-label">Talebiniz</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Muayene</MenuItem>
                  <MenuItem value={20}>Devam Eden Tedavi</MenuItem>
                  <MenuItem value={30}>Diş Estetiği</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <button className="button-71" role="button">
                Randevu Al
              </button>
            </div>
          </div>

          <div
            className="col-md-6 order-1 order-md-2"
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

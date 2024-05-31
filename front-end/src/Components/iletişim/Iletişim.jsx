import { useNavigate } from "react-router-dom";
import WhatsappButton from "../whatsapp/WhatsappButton";
import "./Iletişim.css";
import { Button, Popover } from "antd";

function Iletişim() {
  const navigate = useNavigate();
  const content = (
    <div
      className="popover-content-custom d-flex flex-column  "
      style={{ width: "300px" }}
    >
      <div className="mt-2" style={{ width: "100%" }}>
        <WhatsappButton />
      </div>
      <div className="mt-2">
        <Button
          onClick={() => navigate("/randevu")}
          className="  iletişimRandevuButton"
          style={{ width: "100%" }}
        >
          Randevu Al
        </Button>
      </div>
      <div className="mt-2 " style={{ width: "100%" }}>
        <Button
          onClick={() => navigate("/hakkımızda")}
          className="iletişimHizmetlerimizButton"
          style={{ width: "100%" }}
        >
          Hizmetlerimiz
        </Button>
      </div>
    </div>
  );

  return (
    <div className="fixed-button">
      <Popover content={content}>
        <Button type="primary" className="iletişimButton">
          Bize Ulaşın
        </Button>
      </Popover>
    </div>
  );
}

export default Iletişim;

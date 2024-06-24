import "./FiyatListesi.css";
import { Collapse } from "antd";
import FiyatListesiTable from "./FiyatListesiTable";

const tedavi1 = [
  {
    Tedavi: "İlk muayene (diş muayenesi + panoramik röntgen) online ödenirse",
    fiyat: "500 TL",
  },
  {
    Tedavi: "İlk muayene (diş muayenesi + panoramik röntgen) klinikte ödenirse",
    fiyat: "610 TL",
  },
  {
    Tedavi: "Çocuk muayenesi (pedodonti uzman muayenesi) online ödenirse",
    fiyat: "950 - 1.850 TL",
  },
  {
    Tedavi: "Çocuk muayenesi (pedodonti uzman muayenesi) klinikte ödenirse",
    fiyat: "1.100 - 2.000 TL",
  },
  {
    Tedavi: "Kontrol ve devam eden hasta muayenesi",
    fiyat: "0 TL",
  },
];

const tedavi2 = [
  {
    Tedavi:
      "Dentgroup total bakım (diştaşı temizliği + airflow + cila + dil temizliği + flor) (çift çene)",
    fiyat: "1.755 - 2.660 TL",
  },
  {
    Tedavi: "Dentgroup wash & shine (airflow + cila) (çift çene)",
    fiyat: "760 - 1.100 TL",
  },
];

const tedavi3 = [
  {
    Tedavi:
      "Flor uygulaması (çürük önleyici yüzey koruması, cila dahil) (çift çene)",
    fiyat: "1.140 - 1.850 TL",
  },
  {
    Tedavi: "Süt dişi çekim (dijital anestezi ile)",
    fiyat: "1.215 - 2.100 TL",
  },
  {
    Tedavi: "Fissür örtücü (çürüğe yatkın yerlerin kapatılması) (tek diş)",
    fiyat: "1.210 - 1.600 TL",
  },
];
const items = [
  {
    key: "1",
    label: "Dentgroup Muayene Fiyatı",
    children: <FiyatListesiTable tedavi={tedavi1} />,
  },
  {
    key: "2",
    label: "Dentgroup Total Bakım",
    children: <FiyatListesiTable tedavi={tedavi2} />,
  },
  {
    key: "3",
    label: "Çocuk Diş Tedavi Fiyatları",
    children: <FiyatListesiTable tedavi={tedavi3} />,
  },
  {
    key: "4",
    label: "This is panel header 1",
    children: <FiyatListesiTable tedavi={tedavi2} />,
  },
  {
    key: "5",
    label: "This is panel header 1",
    children: <FiyatListesiTable tedavi={tedavi2} />,
  },
  {
    key: "6",
    label: "This is panel header 1",
    children: <FiyatListesiTable tedavi={tedavi2} />,
  },
  {
    key: "7",
    label: "This is panel header 1",
    children: <FiyatListesiTable tedavi={tedavi2} />,
  },
  {
    key: "8",
    label: "This is panel header 1",
    children: <FiyatListesiTable tedavi={tedavi2} />,
  },
  {
    key: "9",
    label: "This is panel header 1",
    children: <FiyatListesiTable tedavi={tedavi2} />,
  },
];

function FiyatListesi() {
  return (
    <div className="container FiyatListesiGenel">
      <div style={{ marginBottom: "2rem" }}>
        <h1>Fiyat Listesi</h1>
      </div>
      {items.map((item) => (
        <div key={item.key} className="panel-wrapper">
          <Collapse accordion defaultActiveKey={[]}>
            <Collapse.Panel header={item.label} key={item.key}>
              {item.children}
            </Collapse.Panel>
          </Collapse>
        </div>
      ))}
    </div>
  );
}

export default FiyatListesi;

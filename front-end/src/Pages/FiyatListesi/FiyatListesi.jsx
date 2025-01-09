import "./FiyatListesi.css";
import { Collapse } from "antd";
import FiyatListesiTable from "./FiyatListesiTable";

const tedavi1 = [
  {
    Tedavi: "Dolgu ",
    fiyat: "2500 - 3000 TL",
  },
  {
    Tedavi: "Kanal",
    fiyat: "4500 - 5000 TL",
  },
  {
    Tedavi: "Retreatment (Kanal Yenileme)",
    fiyat: "6000 - 6500 TL",
  },
  
];

const tedavi2 = [
  {
    Tedavi:
      "Dolgu",
    fiyat: "2500 - 3000 TL",
  },
  {
    Tedavi: "Kanal",
    fiyat: "4500 - 5000 TL",
  },
  {
    Tedavi: "Diş Çekimi",
    fiyat: "1500 - 2000 TL",
  },
  {
    Tedavi: "Süt Diş Çekimi",
    fiyat: "1500 - 2000 TL",
  },
  {
    Tedavi: "Amputasyon",
    fiyat: "4000 - 4500 TL",
  },
  {
    Tedavi: "Yer Tutucu",
    fiyat: "4000 - 4500 TL",
  },
];

const tedavi3 = [
  {
    Tedavi:
      "Diş Çekimi",
    fiyat: "1500 - 2000 TL",
  },
  {
    Tedavi: "Komplikasyonlu Diş Çekimi",
    fiyat: "2500 - 3000 TL",
  },
  {
    Tedavi: "20'lik Diş Çekimi",
    fiyat: "2500 - 3000 TL",
  },
  {
    Tedavi: "Gömülü Diş Çekimi(Kemik Retansiyonlu)",
    fiyat: "7000 - 7500 TL",
  },
];

const tedavi4 = [
  {
    Tedavi:"Estetik Dolgu",
    fiyat:"4000 - 4500 TL",
  },
  {
    Tedavi:"Diş Beyazlatma",
    fiyat:"7000 - 7500 TL",
  },
  {
    Tedavi:"Diş Taş Temizliği",
    fiyat:"2500 - 3000 TL",
  },
  {
    Tedavi:"Zirkonyum Kaplama",
    fiyat:"6000 - 6500 TL",
  },
  {
    Tedavi:"Yaprak Lamina",
    fiyat:"7000 - 7500 TL",
  },
  {
    Tedavi:"E-MAX",
    fiyat:"7000 - 7500 TL",
  },
];

const tedavi5 = [
{
  Tedavi:"İthal İmplant(Protez Hariç)",
  fiyat:"12000 - 13000 TL",
},
{
  Tedavi:"Premium İthal İmplant(Protez Hariç)",
  fiyat:"17000 - 18000 TL",
},
];

const tedavi6 = [
  {
    Tedavi:"Total Protez(Tek Çene)",
    fiyat:"18000 - 19000 TL",
  },
  {
    Tedavi:"İmplant Üstü Total Protez",
    fiyat:"20000 - 21000 TL",
  },
  {
    Tedavi:"Porselen Kaplama",
    fiyat:"4500 - 5000 TL",
  }
  ];

  const tedavi7 =[
    {
      Tedavi:"Tel Tedavisi ",
      fiyat:"30000 - 70000 TL",
    },
    {
      Tedavi:"Telsiz Ortodonti(Şeffaf Plak) Tedavisi ",
      fiyat:"50000 - 80000 TL",
    },
  ];
const items = [
  {
    key: "1",
    label: "Kanal ve Dolgu Tedavi Fiyatları",
    children: <FiyatListesiTable tedavi={tedavi1} />,
  },
  {
    key: "2",
    label: "Çocuk Diş Tedavi Fiyatları",
    children: <FiyatListesiTable tedavi={tedavi2} />,
  },
  {
    key: "3",
    label: "Diş Çekimi Fiyatları",
    children: <FiyatListesiTable tedavi={tedavi3} />,
  },
  {
    key: "4",
    label: "Estetik Diş Tedavi Fiyatları",
    children: <FiyatListesiTable tedavi={tedavi4} />,
  },
  {
    key: "5",
    label: "İmplant Tedavi Fiyatları",
    children: <FiyatListesiTable tedavi={tedavi5} />,
  },
  {
    key: "6",
    label: "Protez Tedavi Fiyatları",
    children: <FiyatListesiTable tedavi={tedavi6} />,
  },
  {
    key: "7",
    label: "Ortodonti Tedavi Fiyatları",
    children: <FiyatListesiTable tedavi={tedavi7} />,
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

function GoogleMap() {
  return (
    <div
      className="d-flex justify-content-between container mt-5 mb-5 p-5   "
      style={{ backgroundColor: "#212529" }}
    >
      <div className="d-flex justify-content-between row">
        <div className=" col-md-6 col-sm-12">
          <h1 className="Address" style={{ color: "#85713A" }}>
            Adres
          </h1>
          <h4 style={{ color: "white" }}>
            Yıldırım, Ali Fuat Başgil Cd. No:122/A, 34045 Bayrampaşa/İstanbul
          </h4>
          <h1 className="BizeUlaşın mt-5" style={{ color: "#85713A" }}>
            Bize Ulaşın
          </h1>
          <h4 style={{ color: "white" }}>+90 531 964 2737</h4>
          <h4 style={{ color: "white" }}>+90 212 640 6061</h4>
          <h1 className="ÇalışmaSaatlerimiz mt-5" style={{ color: "#85713A" }}>
            Çalışma Saatlerimiz
          </h1>
          <h4 style={{ color: "white" }}>Pzt-Cum: 11.00-23.00</h4>
          <h4 style={{ color: "white" }}>Cumartesi: 11.00-18.00</h4>
          <h4 style={{ color: "white" }}>Pazar: 11.00-18.00</h4>
        </div>

        <div className="col-md-6 col-sm-12 mt-4 mt-md-0">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1264.8279833192378!2d28.89073948571488!3d41.06276526189126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1dd435ce2d3%3A0x4213514acb6d2498!2zT2x5RGVudCBBxJ_EsXogdmUgRGnFnyBTYcSfbMSxxJ_EsSBLbGluacSfaSAtIEJheXJhbXBhxZ9h!5e0!3m2!1str!2str!4v1716524688979!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;

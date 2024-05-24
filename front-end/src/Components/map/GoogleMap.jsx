function GoogleMap() {
  return (
    <div className="d-flex justify-content-end container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1264.8279833192378!2d28.89073948571488!3d41.06276526189126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1dd435ce2d3%3A0x4213514acb6d2498!2zT2x5RGVudCBBxJ_EsXogdmUgRGnFnyBTYcSfbMSxxJ_EsSBLbGluacSfaSAtIEJheXJhbXBhxZ9h!5e0!3m2!1str!2str!4v1716524688979!5m2!1str!2str"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;

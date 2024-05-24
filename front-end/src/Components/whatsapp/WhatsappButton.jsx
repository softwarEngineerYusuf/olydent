import "./WhatsappButton.css";

function WhatsappButton() {
  const phoneNumber = "905075351810"; // Telefon numarası (Türkiye için örnek)
  const message = "Merhaba, ben sizinle iletişime geçmek istiyorum."; // İsteğe bağlı mesaj

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <button onClick={handleWhatsAppClick} className="whatsapp-button">
        WhatsApptan Bize Ulaşın
      </button>
    </div>
  );
}

export default WhatsappButton;

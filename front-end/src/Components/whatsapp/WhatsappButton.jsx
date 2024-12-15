import "./WhatsappButton.css";

function WhatsappButton() {
  const phoneNumber = "905383678182";
  const message = "Merhaba, Sizinle iletişime geçmek istiyorum.";

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

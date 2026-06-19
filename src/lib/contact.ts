const WHATSAPP_NUMBER = "201130615489";

export function getWhatsAppContactUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

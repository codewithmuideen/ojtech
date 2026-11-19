import { WhatsAppIcon } from "@/components/shared/SocialIcons";

const WHATSAPP_NUMBER = "2348134324983";
const WHATSAPP_MESSAGE = "Hi Olamitobi Technologies, I'd like to learn more about your services.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-ink-950/20 transition-transform duration-300 ease-out hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 group-hover:opacity-0" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}

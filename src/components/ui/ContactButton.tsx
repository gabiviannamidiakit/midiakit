import { mediaKit } from "@/data/media-kit";
import { Button } from "@/components/ui/Button";

type ContactButtonProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function ContactButton({ tone = "light", className }: ContactButtonProps) {
  return (
    <Button href={mediaKit.contact.whatsappHref} tone={tone} className={className}>
      Entre em contato
    </Button>
  );
}

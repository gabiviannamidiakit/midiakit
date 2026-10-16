import { redirect } from "next/navigation";
import { mediaKitPath } from "@/lib/site";

// Por enquanto a home leva direto ao mídia kit. Quando houver um link na bio
// (cupons, banners), basta trocar este redirect pelo componente.
export default function Home() {
  redirect(mediaKitPath);
}

import {
  Megaphone,
  Share2,
  Globe,
  ShoppingBag,
  Video,
  Search,
  TrendingUp,
  Code2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  Icon: LucideIcon;
};

export const services: Service[] = [
  { id: "marketing", Icon: Megaphone },
  { id: "social", Icon: Share2 },
  { id: "web", Icon: Globe },
  { id: "ecommerce", Icon: ShoppingBag },
  { id: "video", Icon: Video },
  { id: "seo", Icon: Search },
  { id: "ads", Icon: TrendingUp },
  { id: "software", Icon: Code2 },
  { id: "mobile", Icon: Smartphone },
];

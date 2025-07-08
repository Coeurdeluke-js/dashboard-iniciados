import { FiHome, FiBookOpen, FiUser, FiLogOut, FiMessageCircle } from "react-icons/fi";

export const sidebarItems = [
  { label: "Panel General", href: "/dashboard", icon: FiHome },
  { label: "Mensaje de bienvenida", href: "/dashboard/mensaje", icon: FiMessageCircle },
  { label: "Explora la Academia", href: "/dashboard/iniciado/cursos", icon: FiBookOpen },
  { label: "Ajustes básicos", href: "/dashboard/iniciado/ajustes", icon: "⚙" }
];

export const sidebarItemsAcolito = [
  { label: "Inicio", href: "/dashboard/acolito", icon: FiHome },
  { label: "Explora la Academia", href: "/dashboard/academia", icon: FiBookOpen },
  { label: "Convertirse en Acólito", href: "/dashboard/acolito/convertirse", icon: "🧙" },
  { label: "Eventos abiertos", href: "/dashboard/acolito/eventos", icon: "📅" },
  { label: "Ajustes básicos", href: "/dashboard/acolito/ajustes", icon: "⚙" }
];
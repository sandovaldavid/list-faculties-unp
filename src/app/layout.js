import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Sistema de Gestión de Facultades | UNP",
  description: "Sistema CRUD para la gestión de facultades universitarias. Permite crear, leer, actualizar y eliminar información de las facultades de la Universidad Nacional de Piura.",
  keywords: [
    "facultades",
    "universidad",
    "UNP",
    "gestión académica", 
    "educación superior",
    "sistema universitario"
  ],
  authors: [
    { name: "David Sandoval", url: "https://github.com/sandovaldavid" }
  ],
  creator: "David Sandoval",
  publisher: "Universidad Nacional de Piura",
  icons: {
    icon: "/favicon.ico",
  }
};

// Viewport configuration in its own export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({children}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar/>
        <div className="mt-16 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

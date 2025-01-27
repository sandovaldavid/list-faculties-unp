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
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Sistema de Gestión de Facultades | UNP",
    description: "Gestión completa de facultades universitarias",
    type: "website",
    locale: "es_PE",
    url: "facultades-unp.devprojects.tech ",
  }
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mt-16 min-h-[calc(100vh-4rem)] container mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}

import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Sistema de Gestión de Facultades | UNP",
  description: "Sistema para la gestión de facultades universitarias. Permite operaciones CRUD sobre la información de las facultades de la Universidad Nacional de Piura.",
  keywords: [
    "facultades",
    "universidad",
    "UNP",
    "gestión académica", 
    "educación superior",
    "sistema universitario"
  ],
  authors: [
    { name: "David Sandoval", url: "https://devsandoval.me/" }
  ],
  creator: "David Sandoval",
  publisher: "Universidad Nacional de Piura",
  manifest: "/manifest.json",
  themeColor: "#1F2937",
  colorScheme: "dark light",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/images/icons/favicon-16x16.png", sizes: "16x16" },
      { url: "/images/icons/favicon-32x32.png", sizes: "32x32" }
    ],
    shortcut: "/favicon.ico",
    apple: "/images/icons/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/images/icons/apple-touch-icon.png"
      }
    ]
  }
};

// Viewport configuration in its own export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1F2937",
};

export default function RootLayout({children}) {
  return (
    <html lang="es" className="dark:bg-gray-950">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#1F2937" />
      </head>
      <body className={inter.className}>
        <Navbar/>
        <div className="mt-16 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

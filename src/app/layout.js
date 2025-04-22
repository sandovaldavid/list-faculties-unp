import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

// Define constants for better maintenance
const SITE_URL = "https://facultades-unp.devsandoval.me";
const SITE_NAME = "Sistema de Gestión de Facultades | UNP";
const SITE_DESCRIPTION = "Sistema CRUD para gestionar facultades de la Universidad Nacional de Piura. Crea, lee, actualiza y elimina información académica.";
const SITE_IMAGE = `${SITE_URL}/images/og/og-faculties-unp.png`;
const AUTHOR = "David Sandoval";
const TWITTER_HANDLE = "@dev_sandoval";
const LOCALE = "es_PE";

export const metadata = {
  // Basic metadata
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  
  // Canonical URL
  alternates: {
    canonical: SITE_URL,
  },
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [{
      url: SITE_IMAGE,
      width: 1200,
      height: 630,
      alt: "Universidad Nacional de Piura - Sistema de Facultades",
    }],
    locale: LOCALE,
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [SITE_IMAGE],
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
  
  // Author and publisher info
  authors: [
    { name: AUTHOR, url: "https://devsandoval.me" }
  ],
  creator: AUTHOR,
  publisher: "Universidad Nacional de Piura",
  
  // Other metadata
  keywords: [
    "facultades",
    "universidad",
    "UNP",
    "gestión académica", 
    "educación superior",
    "sistema universitario"
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
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
  maximumScale: 5,
  themeColor: "#1F2937",
  colorScheme: "light only"
};

export default function RootLayout({children}) {
  return (
    <html lang="es" className="dark:bg-gray-950">
      <head>
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:url" content={SITE_URL} />
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

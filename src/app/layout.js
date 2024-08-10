import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <h1>NavBar</h1>
    <div className="h-[calc(100vh-5rem)] container  px-10">
      {children}
    </div>
    </body>
    </html>
  );
}

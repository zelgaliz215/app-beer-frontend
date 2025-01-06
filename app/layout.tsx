// Importaciones necesarias para el layout de la app
import type { Metadata } from "next"; // Import the Metadata type from next
import { Geist, Geist_Mono } from "next/font/google"; // Import fonts from Google
import "./globals.css"; // Import global styles

// Definir las fuentes a utilizar
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Definir los metadatos de la app
export const metadata: Metadata = {
  title: "Beer App",
  description: "Frontend con next para Beer-app",
};

// Definir el layout de la app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    // Definir el layout de la en codigo jsx

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        {/* Childern recibe por props el contenido de page para renderizarlo */}
        {children} 
      </body>
    </html>
    
  );
}

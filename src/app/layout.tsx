import type { Metadata } from "next";
import { Noto } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import {
  ClerkProvider,
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "uCount - Transforma tus proyectos colaborativos",
  description: "uCount te abre las puertas a la colaboración precisa y oportuna, en tus grupos de trabajo. Descubre como pueden votar propuestas y organizar tareas grupales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <head>
          <link
            rel="icon"
            href="/icon.png"
            type="image/png"
            sizes="32x32"
          />
        </head>
        <body className={`${Noto.className} overflow-hidden`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

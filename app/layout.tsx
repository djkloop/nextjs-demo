import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import "./globals.css";
import ClientScript from "@/components/client-script";

import MicrosoftClarity from "@/components/MicrosoftClarity"
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          socialButtonsVariant: "iconButton",
        },
      }}
    >
      <html lang="en">
        <body>{children}</body>
        <ClientScript />
        <MicrosoftClarity />
      </html>
    </ClerkProvider>
  );
}

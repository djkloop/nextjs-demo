import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import "./globals.css";
import ClientScript from "@/components/client-script";
import Head from "next/head";
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
        <Head>
          <ClientScript />
        </Head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

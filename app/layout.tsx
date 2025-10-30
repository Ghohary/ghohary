import type { Metadata } from "next";
import Layout from "./components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "GHOHARY",
  description: "Luxury Fashion Brand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

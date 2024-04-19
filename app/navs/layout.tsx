import "@/public/globals.css";
import type { Metadata } from "next";
import ExpandingToggle from "@/components/navigation/ExpandingToggle";

export const metadata: Metadata = {
  title: "SANDBOX - Navs",
  description: "Navbars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ExpandingToggle />
        {children}
      </body>
    </html>
  );
}

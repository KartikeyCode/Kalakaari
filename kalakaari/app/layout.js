import { Gentium_Book_Plus } from "next/font/google"
import "./globals.css";

const Gentium = Gentium_Book_Plus({ subsets: ["latin"],weight: ['400', '700'], });

export const metadata = {
  title: "Kalakaari",
  description: "Discover Kalakaari, an innovative Indian-fusion cloud kitchen brand blending experimental concepts with cultural diversity. Explore our focus on premium ingredients, exquisite taste profiles, and unique global inspirations. Enjoy a culinary journey through India's diverse flavors, enhanced with international twists, promising an unparalleled gastronomic experience delivered to your doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Gentium.className}>{children}</body>
    </html>
  );
}

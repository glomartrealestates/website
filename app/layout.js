import localFont from "next/font/local";
import "./globals.css";
<<<<<<< HEAD
import Header from "../app/components/header/page";
import Footer from "../app/components/footer/page";
=======
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/page_component/Hero/Hero";
>>>>>>> 930b108030f32224ebd5074334c455e69faf6314

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Global Marketing Real estates",
  description: "Global Marketing Real estates Sell Rent Commerical",
};

export default function RootLayout({ children }) {


  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <Footer />

      </body>
    </html>
  );
}

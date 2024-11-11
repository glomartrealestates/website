import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/page_component/Hero/Hero";

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
        {" "}
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <Hero />
        <div className="max-w-[1350px] items-center mx-auto ">
          {children}
          <Footer />
        </div>{" "}
      </body>
    </html>
  );
}

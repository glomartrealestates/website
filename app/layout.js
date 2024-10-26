import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
// import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import Hero from "./_components/page_component/Hero";
// import Unit from "./_components/Unit";
// import Counters from "./_components/Counters";
// import Project from "./_components/Project";

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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased `} 
      > <Header />
      <Hero />
        <div className="max-w-[1200px] items-center mx-auto">
        {children}
        <Footer /></div>
      </body>
    </html>
  );
}

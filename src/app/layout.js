import { Inter } from "next/font/google";
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "Hyperion Foundation CDN"
};

export default function RootLayout({ children }) {
  const showBanner = true;
  const bannerIsDismissible = false;

  return (
    <html lang="en">
      <meta name="description" content="A Hyperion Foundation CDN website. Storing our old contents that can be used for public." />
      <body className={`${inter.variable} antialiased`}>
        {showBanner && (
          <Banner isDismissible={bannerIsDismissible}>
            <span role="img" aria-label="warning emoji" className="mr-2">
              🚧
            </span>
            This website version is hosted for testing purposes only
            <span role="img" aria-label="warning emoji" className="ml-2">
              🚧
            </span>
          </Banner>
        )}
        <Navbar />
          {/* <main style={{ padding: '2rem' }}> */}
            {children}
          {/* </main> */}
          <svg className="hidden-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="gooey" />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>
          </defs>
        </svg>
        <Footer />
      </body>
    </html>
  );
};


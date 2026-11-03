
import "./globals.css";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

export const metadata = {
  title: "Simple Shop",
  description: "Discover our products",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>

      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

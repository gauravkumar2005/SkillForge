import "./globals.css";
import Navbar from "../app/navbar/page";
import Footer from "../components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

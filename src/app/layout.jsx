import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Website",
  description: "Next.js website with Navbar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar always on top */}
        <Navbar />

   
        <main className="pt-16">{children}</main>

       
        <Footer />
      </body>
    </html>
  );
}

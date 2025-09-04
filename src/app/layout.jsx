import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scrollbutton from "./components/Scrollbutton";

export const metadata = {
  title: "My Website",
  description: "Next.js website with Navbar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <Navbar />

    
        <main className="pt-16">{children}
           <Scrollbutton />
        </main>

       
        <Footer />
      </body>
    </html>
  );
}

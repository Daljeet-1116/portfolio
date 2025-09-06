import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scrollbutton from "./components/Scrollbutton";
import { Icon, icons } from "lucide-react";

export const metadata = {
  title: "My Portfolio",
  description: "Next.js website with Navbar",
  icons: {
    Icon:"/images/favicon.ico"
  }
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

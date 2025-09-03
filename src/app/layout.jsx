import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Website",
  description: "Next.js website with Navbar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <Navbar />

       
        <main className="pt-15">{children}</main>
      </body>
    </html>
  );
}

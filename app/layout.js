import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emp-Manager",
  description: "Employee Management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-40 `}>
        <Header />
        <NavBar />
        {children}
      </body>
    </html>
  );
}

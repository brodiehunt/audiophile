import "./globals.css";
import Nav from "@/app/ui/nav";
import MenuModal from "./ui/menuModal";
import Footer from "./ui/footer";
import { manrope } from "./ui/fonts";
import { CartProvider } from "./lib/cartContext";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartProvider>
          <Nav>
            <MenuModal />
          </Nav>

          {children}

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

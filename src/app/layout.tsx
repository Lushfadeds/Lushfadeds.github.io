import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Snack Shop by Jian Wei",
  description: "exclusive snacks from ntuc/valuedollar, with discount i swear.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <nav className={"navigation-master"}>
            <div>
              <h1>Welcome to my snack shop!</h1>
            </div>
            <div>
              <div className={"navigation"}>
                <Link className={"navigation-item"} href={"/"}>
                  Home
                </Link>
                <Link className={"navigation-item"} href={"/titbits"}>
                  Titbits
                </Link>
                <Link className={"navigation-item"} href={"/snacks"}>
                  Snacks
                </Link>
                <Link className={"navigation-item"} href={"/candies"}>
                  Candies
                </Link>
                <Link className={"navigation-item"} href={"/drinks"}>
                  Drinks
                </Link>
                <Link className={"navigation-item"} href={"/contact"}>
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
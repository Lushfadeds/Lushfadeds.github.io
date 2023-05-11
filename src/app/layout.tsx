import "./globals.css";

import Link from "next/link";

export const metadata = {
  title: "Snack Shop by Jian Wei",
  description: "exclusive snacks from ntuc/valuedollar, with discount i swear.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={"navigation"}>
          <h1>Welcome to my snack shop!</h1>

          <button className="login-button">Sign Up / Log In</button>
          
          <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/snacks"}>Snacks</Link>
            <Link href={"/candies"}>Candies</Link>
            <Link href={"/drinks"}>Drinks</Link>
            <Link href={"/contact"}>Contact us</Link>
          </nav>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
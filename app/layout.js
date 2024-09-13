import Link from "next/link";
import Logo from "./components/Logo";

export const metadata = {
  title: "The wild oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <header>
          <Logo />
          <ul className=" ">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/cabins">Cabins</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/account">Your account</Link>
            </li>
          </ul>
        </header>
        {children}
        <footer>copyRight by hassan younes</footer>
      </body>
    </html>
  );
}

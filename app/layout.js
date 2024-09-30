import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const Josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The wild oasis",
    default: "Welcome The wild oasis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Josefin.className} bg-primary-950 min-h-screen antialiased flex flex-col relative text-primary-100 overflow-x-hidden`}
      >
        <Header />
        <div className="flex-1 px-6 py-12">
          <main className="z-0 max-w-7xl mx-auto min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}

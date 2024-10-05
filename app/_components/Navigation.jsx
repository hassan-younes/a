'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const navLinks = [
    {
      name: "Cabins",
      href: "/cabins",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Guest area",
      href: "/account",
     
    },
  ];
  const pathname=usePathname()
  
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
      {navLinks.map((link)=>(
        
        <li key={link.name}>
        <Link
         href={link.href}
           className={`hover:text-accent-400 ${pathname.split("/")[1]===link.href.split("/")[1]?"text-accent-400":""}  transition-colors`}
        >
          
          {link.name}
        </Link>
      </li>
        ))}
       
      </ul>
    </nav>
  );
}

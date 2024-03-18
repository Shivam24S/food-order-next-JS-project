"use client";

import Link from "next/link";
import classes from "./NavLink.module.css";

import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
  const path = usePathname(); // it will give simple current page path name

  return (
    <>
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? `${classes.Link} ${classes.active} `
            : classes.Link
        }
      >
        {children}
      </Link>
    </>
  );
}

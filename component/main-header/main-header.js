import Link from "next/link";
import Image from "next/image";

import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {/* here we are using built in next js image component for lazy loading and webp format for this image */}
          {/* but as you can it's header logo image it wil always showup in website for that  we will  use  priority instead of  lazy loading */}
          <Image src={LogoImg} alt="logo" priority />
          Tasty Junction
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browser all meals</NavLink>
              <NavLink href="/community">Foodie community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

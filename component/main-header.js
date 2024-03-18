import Link from "next/link";
import LogoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <>
      <header>
        <Link href="/">
          {/* here we have to import images like that way we have to add src if we import like this way */}
          <img src={LogoImg.src} alt="logo" />
          Tasty Junction
        </Link>
      </header>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browser all meals</Link>
            <Link href="/community">Foodie community</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

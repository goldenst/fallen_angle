import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
         <a><img src='/images/logo2 white.svg'/></a> 
        </Link>
      </div>
      <nav>
        <ul>
        <li>
            <Link href="/galery">
              <a>Galery</a>
            </Link>
          </li>
          <li>
            <Link href="/artist">
              <a>Artist</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

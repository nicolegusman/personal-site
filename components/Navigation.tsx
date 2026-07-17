import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          Nico Gusman
        </Link>

        <div className={styles.links}>
          <Link href="/">Work</Link>
          <Link href="/">Approach</Link>
          <Link href="/">Interests</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
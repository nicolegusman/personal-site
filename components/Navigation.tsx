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
          <Link href="/work">Work</Link>
          <Link href="/approach">Approach</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
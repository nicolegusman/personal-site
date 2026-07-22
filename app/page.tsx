import Link from "next/link";

import PageContainer from "@/components/PageContainer";
import { home } from "@/content/home";

import styles from "./page.module.css";

export default function Home() {
  return (
    <PageContainer>
      <main className={styles.hero}>
        <p className={styles.eyebrow}>
          UX Research · Strategy · Service Design
        </p>

        <h1 className={styles.title}>
          Helping organizations understand what{" "}
          <span className={styles.emphasis}>people experience</span> before
          deciding what to build or change.
        </h1>

        <p className={styles.introduction}>
          {home.introduction}
        </p>

        <Link href="/work" className={styles.scrollCue}>
          <span>Selected Work</span>

          <span className={styles.arrow} aria-hidden="true">
            ↓
          </span>
        </Link>
      </main>
    </PageContainer>
  );
}
import PageContainer from "@/components/PageContainer";
import { home } from "@/content/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageContainer>
      <h1 className={styles.title}>
        {home.headline}
      </h1>

      <p className={styles.subtitle}>
        {home.subtitle}
      </p>

      <p className={styles.introduction}>
        {home.introduction}
      </p>

      <a href="/work" className={styles.scrollCue}>
  <span>Selected Work</span>
  <span className={styles.arrow}>↓</span>
</a>

    </PageContainer>
  );
}
import PageContainer from "@/components/PageContainer";
import { home } from "@/content/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageContainer>
      <h1 className={styles.title}>{home.title}</h1>

      <p className={styles.subtitle}>
        {home.subtitle}
      </p>

      <p className={styles.introduction}>
        {home.introduction}
      </p>
    </PageContainer>
  );
}
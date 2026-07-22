import PageContainer from "@/components/PageContainer";
import ApproachFramework from "@/components/ApproachFramework/ApproachFramework";
import ApproachPrinciples from "@/components/ApproachPrinciples/ApproachPrinciples";

import approach from "@/content/approach";

import styles from "./page.module.css";

export default function ApproachPage() {
  return (
    <PageContainer>
      <article>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>
              My Approach
            </p>

            <h1 className={styles.title}>
              I believe research should be easy to understand, remember, and
              use.
            </h1>

            <div className={styles.introduction}>
              {approach.introduction}
            </div>
          </div>
        </header>

        <ApproachFramework />

        <ApproachPrinciples
          principles={approach.principles}
        />
      </article>
    </PageContainer>
  );
}
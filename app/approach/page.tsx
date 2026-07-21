import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section/Section";

import approach from "@/content/approach";

import styles from "./page.module.css";

export default function ApproachPage() {
  return (
    <PageContainer>
      <article>

        <header className={styles.hero}>

          <div className={styles.heroInner}>

            <p className={styles.eyebrow}>
              Approach
            </p>

            <h1 className={styles.title}>
              Research is only valuable if it helps people make better decisions.
            </h1>

            <div className={styles.introduction}>
              {approach.introduction}
            </div>

          </div>

        </header>

        <section className={styles.framework}>

          <div className={styles.step}>

            <div className={styles.label}>
              WHY?
            </div>

            <h2>
              What is behind the behavior?
            </h2>

            <p>
              Understand people's goals, motivations, constraints, and context.
            </p>

          </div>

          <div className={styles.arrow}>
            ↓
          </div>

          <div className={styles.step}>

            <div className={styles.label}>
              SO WHAT?
            </div>

            <h2>
              Why does this matter?
            </h2>

            <p>
              Identify opportunities, risks, and patterns worth paying
              attention to.
            </p>

          </div>

          <div className={styles.arrow}>
            ↓
          </div>

          <div className={styles.step}>

            <div className={styles.label}>
              NOW WHAT?
            </div>

            <h2>
              What should we do?
            </h2>

            <p>
              Translate understanding into practical decisions, products,
              services, and organizational change.
            </p>

          </div>

        </section>

        <main className={styles.content}>

          {approach.sections.map((section) => (
            <Section
              key={section.title}
              title={section.title}
              body={section.body}
            />
          ))}

        </main>

      </article>
    </PageContainer>
  );
}
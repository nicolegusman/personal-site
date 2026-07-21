import PageContainer from "@/components/PageContainer";
import contact from "@/content/contact";

import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <PageContainer>
      <article className={styles.article}>

        <header className={styles.hero}>
          <h1 className={styles.title}>
            {contact.title}
          </h1>

          <div className={styles.introduction}>
            {contact.introduction}
          </div>
        </header>

        <section className={styles.details}>

          <div className={styles.item}>
            <h2>Email</h2>

            <a href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>

          <div className={styles.item}>
            <h2>LinkedIn</h2>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nicolegusman
            </a>
          </div>

          <div className={styles.item}>
            <h2>Resume</h2>

            <a
              href={contact.resume}
              target="_blank"
            >
              Download PDF
            </a>
          </div>

        </section>

        <p className={styles.updated}>
          Last updated {contact.updated}
        </p>

      </article>
    </PageContainer>
  );
}
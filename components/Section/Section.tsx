import Figure from "../Figure";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

import styles from "./Section.module.css";

type FigureData = {
  image: string;
  alt: string;
  caption?: string;
};

type SectionProps = {
  title: string;
  body: React.ReactNode;
  figure?: FigureData;
};

export default function Section({
  title,
  body,
  figure,
}: SectionProps) {
  return (
    <section className={styles.section}>
      <ScrollReveal>
        <header className={styles.header}>
          <h2 className={styles.title}>
            {title}
          </h2>
        </header>
      </ScrollReveal>

      {figure && (
        <ScrollReveal delay={70}>
          <Figure
            image={figure.image}
            alt={figure.alt}
            caption={figure.caption}
          />
        </ScrollReveal>
      )}

      <ScrollReveal
        delay={100}
        observeChildren="blockquote"
      >
        <div className={styles.body}>
          {body}
        </div>
      </ScrollReveal>
    </section>
  );
}
import Figure from "../Figure";
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
      <h2 className={styles.title}>
        {title}
      </h2>

      {figure && (
        <Figure
          image={figure.image}
          alt={figure.alt}
          caption={figure.caption}
        />
      )}

      <div className={styles.body}>
        {body}
      </div>
    </section>
  );
}
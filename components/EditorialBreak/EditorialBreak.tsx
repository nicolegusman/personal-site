import styles from "./EditorialBreak.module.css";

type EditorialBreakProps = {
  quote: string;
};

export default function EditorialBreak({
  quote,
}: EditorialBreakProps) {
  return (
    <section className={styles.break}>
      <blockquote className={styles.quote}>
        {quote}
      </blockquote>
    </section>
  );
}
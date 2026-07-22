import styles from "./ApproachPrinciples.module.css";

type Principle = {
  number: string;
  title: string;
  summary: string;
  body: string;
};

type ApproachPrinciplesProps = {
  principles: Principle[];
};

export default function ApproachPrinciples({
  principles,
}: ApproachPrinciplesProps) {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <p className={styles.kicker}>THREE PRINCIPLES I RETURN TO</p>

        <h2 className={styles.title}>
          The habits I try to bring to every project.
        </h2>
      </header>

      <div className={styles.principles}>
        {principles.map((principle) => (
          <article
            key={principle.number}
            className={styles.principle}
          >
            <div
              className={styles.number}
              aria-hidden="true"
            >
              {principle.number}
            </div>

            <div className={styles.content}>
              <h3 className={styles.principleTitle}>
                {principle.title}
              </h3>

              <p className={styles.summary}>
                {principle.summary}
              </p>

              <p className={styles.body}>
                {principle.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.closing}>
  <p>
Every project is different, but these are the habits I keep returning to.
 They help me turn organizational questions into decisions people can understand, remember, and use.
  </p>
</div>
    </section>
  );
}
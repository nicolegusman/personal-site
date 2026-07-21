import styles from "./CaseStudySnapshot.module.css";

type Props = {
  role: string;
  methods: string[];
  impact: string;
};

export default function CaseStudySnapshot({
  role,
  methods,
  impact,
}: Props) {
  return (
    <section className={styles.snapshot}>

      <p className={styles.kicker}>
        Overview
      </p>

      <dl className={styles.grid}>

        <div className={styles.item}>
          <dt>Role</dt>
          <dd>{role}</dd>
        </div>

        <div className={styles.item}>
  <dt>Methods</dt>

  <dd>
    <div className={styles.methods}>
      {methods.map((method) => (
        <span
          key={method}
          className={styles.method}
        >
          {method}
        </span>
      ))}
    </div>
  </dd>
</div>

        <div className={styles.item}>
          <dt>Contribution</dt>
          <dd>{impact}</dd>
        </div>

      </dl>

    </section>
  );
}
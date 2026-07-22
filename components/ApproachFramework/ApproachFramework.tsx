import styles from "./ApproachFramework.module.css";

const stages = [
  {
    label: "WHY?",
    title: "What is happening beneath the surface?",
    body:
      "Understand people's goals, constraints, behaviors, and everyday context.",
  },
  {
    label: "SO WHAT?",
    title: "Why does it matter?",
    body:
      "Connect observations to meaningful opportunities, risks, and decisions.",
  },
  {
    label: "NOW WHAT?",
    title: "What should we do next?",
    body:
      "Prioritize practical recommendations that teams can confidently act on.",
  },
];

export default function ApproachFramework() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <p className={styles.kicker}>HOW I WORK</p>

        <h2 className={styles.title}>
          Making research usable often requires more than a solid research plan.
        </h2>

        <p className={styles.intro}>
          This is the sequence I return to whenever I&apos;m trying to
          understand a problem and help people act on it.
        </p>
      </header>

      <div className={styles.frameworkShell}>
        {stages.map((stage, index) => (
          <div key={stage.label}>
            <div className={styles.stage}>
              <div className={styles.label}>{stage.label}</div>

              <h3>{stage.title}</h3>

              <p>{stage.body}</p>
            </div>

            {index < stages.length - 1 && (
              <div className={styles.arrow}>
                <div className={styles.arrowLine} />
                <span aria-hidden="true">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
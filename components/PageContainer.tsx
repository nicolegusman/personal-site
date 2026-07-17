import styles from "./PageContainer.module.css";

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        {children}
      </section>
    </main>
  );
}
type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 2rem",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "var(--max-width)",
        }}
      >
        {children}
      </section>
    </main>
  );
}
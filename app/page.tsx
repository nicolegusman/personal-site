import PageContainer from "@/components/PageContainer";
import { home } from "@/content/home";

export default function Home() {
  return (
    <PageContainer>
      <h1
        style={{
          fontSize: "3.25rem",
          fontWeight: 600,
          marginBottom: "0.75rem",
        }}
      >
        {home.title}
      </h1>

      <p
        style={{
          fontSize: "1.35rem",
          color: "var(--text-muted)",
          marginBottom: "2rem",
        }}
      >
        {home.subtitle}
      </p>

      <p
        style={{
          fontSize: "1.15rem",
          lineHeight: 1.8,
          maxWidth: "42rem",
        }}
      >
        {home.introduction}
      </p>
    </PageContainer>
  );
}
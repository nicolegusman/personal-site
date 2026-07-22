import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section/Section";
import { notFound } from "next/navigation";

import { projects } from "@/content/projects";

import styles from "./page.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  if (!(slug in projects)) {
  notFound();
}

const project = projects[slug as keyof typeof projects];
  
  return (
    <PageContainer>
      <article className={styles.article}>
        <div className={styles.heroInner}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>
              {project.organization}
            </p>

            <h1 className={styles.title}>
              {project.title}
            </h1>

            <p className={styles.subtitle}>
              {project.subtitle}
            </p>

            {project.methods && (
              <div className={styles.methodsSection}>
                <p className={styles.methodsLabel}>
                  Research Methods
                </p>

                <div className={styles.methods}>
                  {project.methods.map((method) => (
                    <span
                      key={method}
                      className={styles.method}
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </header>

          {project.introduction && (
            <div className={styles.introduction}>
              {project.introduction}
            </div>
          )}
        </div>

        <main className={styles.content}>
          {project.sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            figure={"figure" in section ? section.figure : undefined}
            body={section.body}
          />
          ))}
        </main>
      </article>
    </PageContainer>
  );
}
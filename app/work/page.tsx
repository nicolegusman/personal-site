import PageContainer from "@/components/PageContainer";
import ProjectPreview from "@/components/ProjectPreview";

import { work } from "@/content/work";

import styles from "./page.module.css";

export default function WorkPage() {
  return (
    <PageContainer>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {work.title}
        </h1>

        <p className={styles.introduction}>
          {work.introduction}
        </p>
      </header>

      <section className={styles.projects}>
        {work.projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            slug={project.slug}
            title={project.title}
            subtitle={project.subtitle}
            organization={project.organization}
            role={project.role}
          />
        ))}
      </section>
    </PageContainer>
  );
}
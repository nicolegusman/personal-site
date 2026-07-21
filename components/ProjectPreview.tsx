import Link from "next/link";
import styles from "./ProjectPreview.module.css";

type ProjectPreviewProps = {
  slug: string;
  title: string;
  subtitle: string;
  organization: string;
  role: string;
};

export default function ProjectPreview({
  slug,
  title,
  subtitle,
  organization,
  role,
}: ProjectPreviewProps) {
  return (
    <article className={styles.project}>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.meta}>
        <span>{organization}</span>
        <span>•</span>
        <span>{role}</span>
      </div>

      <Link href={`/work/${slug}`} className={styles.link}>
        Explore the project →
      </Link>
    </article>
  );
}
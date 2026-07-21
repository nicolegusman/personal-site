import Image from "next/image";
import styles from "./Figure.module.css";

type FigureProps = {
  image: string;
  alt: string;
  caption?: string;
};

export default function Figure({
  image,
  alt,
  caption,
}: FigureProps) {
  return (
    <figure className={styles.figure}>
      <Image
        src={image}
        alt={alt}
        width={1400}
        height={900}
        className={styles.image}
      />

      {caption && (
        <figcaption className={styles.caption}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
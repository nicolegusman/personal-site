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
      <div className={styles.imageFrame}>
        <Image
          src={image}
          alt={alt}
          width={1600}
          height={1000}
          sizes="(max-width: 700px) calc(100vw - 2rem), 52rem"
          className={styles.image}
        />
      </div>

      {caption && (
        <figcaption className={styles.caption}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
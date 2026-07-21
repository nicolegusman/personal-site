import Image from "next/image";

import styles from "./EditorialFigure.module.css";

type EditorialFigureProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export default function EditorialFigure({
  src,
  alt,
  caption,
  width = 1600,
  height = 900,
}: EditorialFigureProps) {
  return (
    <figure className={styles.figure}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
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
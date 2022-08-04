import Image from "next/image";
import Link from "next/link";
import styles from "./nftcard.module.scss";

export default function NftCard({ src, alt, size = 400, id }) {
  return (
    <Link href={`/badge/${id}`}>
      <div
        className={styles.card}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          className={styles.image}
          width={size}
          height={size}
        />
      </div>
    </Link>
  );
}

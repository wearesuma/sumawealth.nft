import Image from "next/image";
import styles from "./nftcard.module.scss";

export default function NftCard({ src, alt, size = 400 }) {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt={alt}
        className={styles.image}
        width={size}
        height={size}
      />
    </div>
  );
}

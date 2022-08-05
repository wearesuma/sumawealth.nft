import Image from "next/image";
import { Collection } from "../../lib/api";
import styles from "./badge.module.scss";
import Details from "./details";
import Showed from "./showed";

export default function BadgeComponent({ badge }: { badge: Collection }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/floating_badges.jpg"}
          alt="Floating badges"
          className={styles.hero}
          width={1920}
          height={645}
        />
      </div>

      <div className={styles.row}>
        <Details badge={badge} />
        <Showed badge={badge} />
      </div>
    </div>
  );
}

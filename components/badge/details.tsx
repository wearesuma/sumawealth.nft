import {
  faHeart,
  faHeartCircleBolt,
  faShareNodes,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collection } from "../../lib/api";

import styles from "./details.module.scss";

export default function Details({ badge }: { badge: Collection }) {
  return (
    <div className={styles.details}>
      <h1>{badge.title} Badge</h1>
      <h2>{badge.subtitle}</h2>
      <div className={styles.sub}>
        <h3>Available {badge.mintageQty}</h3>
        <button className={[styles.btn, styles.follow].join(" ")}>
          15K <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <p className={styles.description}>{badge.description}</p>
      <div className={styles.row2}>
        <button className={[styles.btn, styles.collect].join(" ")}>
          Collect
        </button>
        <button className={styles.btn}>View Loot</button>
      </div>

      <div className={styles.wrapper}>
        <h4 className={styles.selected}>Info</h4>
      </div>
      <h5>NFT ID</h5>
      <p className={styles.focus}>{badge.hash}</p>
      <h5>Mintage</h5>
      <p className={styles.focus}>{badge.mintage}</p>
    </div>
  );
}

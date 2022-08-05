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
      <div className={styles.sub}>
        <h2>{badge.subtitle}</h2>
        <span>|</span>
        <h2>Available {badge.mintageQty}</h2>
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
        <h3 className={styles.selected}>Info</h3>
      </div>
      <h4>NFT ID</h4>
      <p className={styles.focus}>{badge.hash}</p>
      <h4>Mintage</h4>
      <p className={styles.focus}>{badge.mintage}</p>
    </div>
  );
}

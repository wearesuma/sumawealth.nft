import { Collection } from "../../lib/api";
import NftCard from "../nfftcard";

import styles from "./showed.module.scss";

export default function Showed({ badge }: { badge: Collection }) {
  return (
    <div className={styles.container}>
      <NftCard src={badge.image} alt={badge.title} id={badge.hash} />
    </div>
  );
}

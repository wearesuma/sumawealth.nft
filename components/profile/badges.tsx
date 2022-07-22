import { useState, useEffect } from "react";
import { collections } from "../../lib/api";

import styles from "./badges.module.scss";

export default function Badges({ token }: { token: string }) {
  const [c, setCollections] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    collections(token).then((c) => {
      setCollections(c);
      setLoading(false);
    });
  }, [token]);

  return <div className={styles.container}>{loading}</div>;
}

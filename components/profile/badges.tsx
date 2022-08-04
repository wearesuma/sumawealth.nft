import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { UserCollection, collections } from "../../lib/api";
import NftCard from "../nfftcard";

import styles from "./badges.module.scss";

export default function Badges({ token }: { token: string }) {
  const [cs, setCollections] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeI, setActiveI] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setLoading(true);
    collections(token).then((c) => {
      setCollections(c);
      setLoading(false);
    });
  }, [token]);

  let child = <div className={styles.spinner}></div>;
  let data = {
    collected: [],
    created: [],
    favorited: [],
    hidden: [],
  };
  if (!loading) {
    data.collected = cs;
    child = (
      <div className={styles.grid}>
        {data[Object.keys(data)[activeI]]
          .filter((c: UserCollection) => {
            let t = searchText.toLowerCase();

            return (
              c.title.toLowerCase().includes(t) ||
              c.description.toLowerCase().includes(t) ||
              c.subtitle.toLowerCase().includes(t)
            );
          })
          .map((c: UserCollection) => (
            <NftCard
              src={c.preview_image}
              alt={c.title}
              key={c.collection_id}
              id={c.collection_id}
              size={300}
            />
          ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.btns}>
          {Object.keys(data).map((v, i) => (
            <button
              key={v}
              className={
                activeI == i
                  ? [styles.btn, styles.active].join(" ")
                  : styles.btn
              }
              onClick={(_) => setActiveI(i)}
            >
              {v} {data[v].length}
            </button>
          ))}
          <button className={[styles.btn, styles.dropdown].join(" ")}>
            offers <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className={styles.input}
          onChange={(evt) => setSearchText(evt.target.value)}
        />
      </div>

      <div className={styles.content}>{child}</div>
    </div>
  );
}

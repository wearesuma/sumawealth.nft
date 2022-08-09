import { Collection } from "../../lib/api";
import NftCard from "../nfftcard";

import styles from "./showed.module.scss";

export default function Showed({
  badge,
  playlist,
  video,
  quiz,
}: {
  badge: Collection;
  quiz: string | null;
  video: string | null;
  playlist: string;
}) {
  return (
    <div className={styles.container}>
      <NftCard src={badge.image} alt={badge.title} id={badge.hash} />

      {quiz === null && (
        <button className={styles.btn}>
          <a href={playlist} target="_blank" rel="noreferrer">
            Go to playlist
          </a>
        </button>
      )}

      {video !== null && (
        <iframe
          className={styles.iframe}
          width="350"
          height="197"
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {quiz !== null && (
        <button className={styles.btn}>
          <a href={quiz} target="_blank" rel="noreferrer">
            Go to quiz
          </a>
        </button>
      )}
    </div>
  );
}

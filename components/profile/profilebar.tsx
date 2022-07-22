import styles from "./profilebar.module.scss";
import Image from "next/image";
import { Profile } from "../../lib/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faEllipsis,
  faE,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileBar({ user }: { user: Profile }) {
  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <Image
            src={user.avatar || "/images/avatar.png"}
            alt="avatar"
            width={150}
            height={150}
            className={styles.avatar}
          />
          <div className={styles.username}>
            {user.display_name ||
              `${user.first_name || user.email || "John"} ${
                user.last_name || user.last_name
              }`}
          </div>
          <div className={styles.date}>Joined april 2022</div>
        </div>

        <div className={styles.group}>
          <input
            type="text"
            className={styles.input}
            disabled
            value={user.email}
          />
          <button className={styles.icon}>
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
          <button className={styles.btn}>follow</button>
          <button className={styles.icon}>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>
    </div>
  );
}

import styles from "./profile.module.scss";
import ProfileBar from "./profilebar";

import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/loot_collection.png"
          alt="Loot collection"
          width={1920}
          height={645}
          className={styles.hero}
        />
      </div>
      <ProfileBar />
    </div>
  );
}

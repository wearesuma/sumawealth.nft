import styles from "./profile.module.scss";
import ProfileBar from "./profilebar";

import Image from "next/image";

import {
  profile as getProfile,
  tokenService,
  userService,
} from "../../lib/api";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const token = tokenService.tokenValue;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProfile(token).then((data) => {
      setProfile(data);
      setLoading(false);
    });
  }, [token]);

  let child;

  if (loading) {
    child = <div className={styles.spinner} />;
  } else {
    child = (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/loot_collection.jpg"
            alt="Loot collection"
            width={1920}
            height={645}
            className={styles.hero}
          />
        </div>
        <ProfileBar user={profile} />
      </div>
    );
  }

  return <div className={styles.container}>{child}</div>;
}

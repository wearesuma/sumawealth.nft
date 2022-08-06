import styles from "./profile.module.scss";
import ProfileBar from "./profilebar";

import Image from "next/image";

import {
  profile as getProfile,
  tokenService,
  userService,
} from "../../lib/api";
import { useEffect, useState } from "react";
import Badges from "./badges";
import Router from "next/router";
import { CircleLoader } from "react-spinners";

export default function ProfilePage() {
  const token = tokenService.tokenValue;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProfile(token)
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((_) => {
        Router.push("/register");
      });
  }, [token]);

  let child;

  if (loading) {
    child = (
      <div className={styles.spinner}>
        <CircleLoader color="white" size={130} />
      </div>
    );
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
        <div className={styles.badges}>
          <Badges token={token} />
        </div>
      </div>
    );
  }

  return child;
}

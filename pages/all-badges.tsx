import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout/layout";
import NftCard from "../components/nfftcard";
import { Collection, allCollections } from "../lib/api";

import styles from "./allbadges.module.scss";

export default function AllBadges({ badges }: { badges: Collection[] }) {
  return (
    <Layout title="All Badges">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/el_loot.jpg"}
            alt="El Loot"
            className={styles.hero}
            width={1920}
            height={645}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.grid}>
            {badges.map((badge) => (
              <Link key={badge.title} href={`/badge/${badge.hash}`}>
                <NftCard src={badge.image} alt={badge.title} id={badge.hash} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const badges: Collection[] = await allCollections();

  return { props: { badges } };
}

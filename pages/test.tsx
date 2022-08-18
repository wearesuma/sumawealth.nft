import Link from "next/link";
import Layout from "../components/layout/layout";

import styles from "./test.module.scss";

export default function Home() {
  return (
    <Layout title="test badges">
      <div className={styles.container}>
        <iframe src="https://sumawealth.com/home-rent-vs-buy-embed"></iframe>
        <iframe src="https://sumawealth.com/savings-embed"></iframe>
        <iframe src="https://sumawealth.com/saving-juntos-embed"></iframe>
        <iframe src="https://sumawealth.com/credit-card-payoff-embed"></iframe>
        <iframe src="https://sumawealth.com/incorporate-vs-freelance-embed"></iframe>
      </div>
    </Layout>
  );
}

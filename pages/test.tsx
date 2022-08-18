import Link from "next/link";
import Header from "../components/layout/header";
import Layout from "../components/layout/layout";

import styles from "./test.module.scss";

export default function Home() {
  return (
    <div className={styles.all}>
      <Header />
      <div className={styles.spacer}></div>
      <div className={styles.container}>
        <iframe src="https://sumawealth.com/home-rent-vs-buy-embed"></iframe>
        <iframe src="https://sumawealth.com/savings-embed"></iframe>
        <iframe src="https://sumawealth.com/saving-juntos-embed"></iframe>
        <iframe src="https://sumawealth.com/credit-card-payoff-embed"></iframe>
        <iframe src="https://sumawealth.com/incorporate-vs-freelance-embed"></iframe>
      </div>
    </div>
  );
}

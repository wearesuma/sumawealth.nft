import Head from "next/head";
import styles from "./layout.module.scss";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />

      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

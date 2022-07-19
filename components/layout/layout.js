import Head from "next/head";
import styles from "./layout.module.scss";
import Header from "./header";

const Footer = () => {
  return null;
};

const Layout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
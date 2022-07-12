import Head from "next/head";
import styles from "./layout.module.scss";

const Header = () => {
  return null;
};
const Footer = () => {
  return null;
};

const Layout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700"
          rel="stylesheet"
        ></link>
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

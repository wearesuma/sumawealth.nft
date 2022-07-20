import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header className={styles.header}>
      <div className={[styles.headerMain, styles.loveSticky].join(" ")}>
        <div className={[styles.container, styles.head].join(" ")}>
          <div className={styles.row}>
            <div className={styles.left}>
              <Logo />
            </div>

            <div className={styles.right}>
              <div className={styles.navWrapper}>
                <div
                  id={styles.menuButton}
                  onClick={(_) => setOpened(!opened)}
                  className={opened ? styles.menuOpened : undefined}
                >
                  <span></span>
                </div>
                <div
                  className={`${styles.navWrapperInner} ${
                    opened ? styles.opened : styles.closed
                  }`}
                >
                  <ul className={styles.nav}>
                    <NavItem
                      title="Academy"
                      href="#"
                      links={
                        new Map<string, string>([
                          ["Budget Master", "https://suma.land/YTBudgetMaster"],
                          ["Credit Master", "https://suma.land/YTCreditMaster"],
                          [
                            "Savings Master",
                            "https://suma.land/YTSavingsMaster",
                          ],
                          [
                            "Debt Free Master",
                            "https://suma.land/YTDebtfreeMaster",
                          ],
                          [
                            "Invest & Retire Master",
                            "https://suma.land/YTInvestMaster",
                          ],
                          [
                            "Financial Literacy Master",
                            "https://suma.land/YTFinanceMaster",
                          ],
                        ])
                      }
                    />
                    <NavItem
                      title="NFT Mercadito"
                      href="#"
                      links={new Map([["Coming soon...", "#"]])}
                    />

                    <NavItem title="SUMA App" href="https://suma.land/app" />

                    <NavItem
                      title="SUMA FI"
                      href="#"
                      links={new Map([["Comming soon...", "#"]])}
                    />
                    <li className={styles.btnLi}>
                      <button className={styles.btn}>
                        <Link href="/register">Register / Login</Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.logoContainer}>
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            className={styles.mainLogo}
            alt="Suma wealth"
            width={126.77}
            height={50}
          />
        </Link>
      </span>
    </div>
  );
}

function NavItem({
  title,
  href,
  links,
}: {
  title: string;
  href: string;
  links?: Map<string, string>;
}) {
  const [opened, setOpened] = useState(false);

  return (
    <li
      className={links ? styles.hasSubItem : undefined}
      onClick={(_) => setOpened(!opened)}
    >
      {links && (
        <span
          className={
            opened
              ? `${styles.submenuButton} ${styles.submenuOpened}`
              : styles.submenuButton
          }
        ></span>
      )}
      <Link href={href}>{title}</Link>
      {links && (
        <ul
          className={styles.subMenu}
          style={{ display: opened ? "block" : "none" }}
        >
          {Array.from(links.entries()).map(([key, value]) => (
            <li key={key}>
              {value.startsWith("http") ? (
                <a href={value} target="_blank" rel="noreferrer">
                  {key}
                </a>
              ) : (
                <Link href={value}>{key}</Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
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
                <div className={styles.navWrapperInner}>
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
                      links={new Map<string, string>([["Coming soon...", "#"]])}
                    />

                    <NavItem title="SUMA App" href="#" />
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
  return (
    <li className={links && styles.hasSubItem}>
      <Link href={href}>{title}</Link>
      {links && (
        <ul className={styles.subMenu}>
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

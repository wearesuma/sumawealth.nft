import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <p className={styles.heading}>Join the Community</p>
            <div className={styles.row}>
              <IconLink
                href="https://www.facebook.com/wearesuma/"
                icon="/images/icons/fb.png"
                alt="facebook"
              />
              <IconLink
                href="https://twitter.com/wearesuma"
                icon="/images/icons/twitter.png"
                alt="twitter"
              />
              <IconLink
                href="https://www.instagram.com/wearesuma/"
                icon="/images/icons/insta.png"
                alt="instagram"
              />
              <IconLink
                href="https://www.youtube.com/channel/UCtFH6jk0TQhRCfuaak3dWLA"
                icon="/images/icons/youtube.png"
                alt="youtube"
              />
            </div>
          </div>
          <div className={styles.middle}>
            <p className={styles.heading}>My Account</p>
            <ul className={styles.list}>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/badges">All Badges</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <Image
              src="/images/qrcode.png"
              width={200}
              height={200}
              alt="qrcode"
            />

            <p className={styles.sub}>Visit Us!</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} Suma Wealth. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function IconLink({
  href,
  icon,
  alt = icon,
}: {
  href: string;
  icon: string;
  alt: string;
}) {
  return (
    <a href={href} className={styles.icon} target="_blank" rel="noreferrer">
      <Image src={icon} width={45} height={45} alt={alt} />
    </a>
  );
}

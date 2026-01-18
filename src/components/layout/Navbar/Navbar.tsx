import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span>INTERCEPTLY</span>
        </div>

        <div className={styles.links}>
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="#privacy">Privacy</Link>
          <Link href="#install">Install</Link>
        </div>

        <div className={styles.actions}>
          <Link href="https://chrome.google.com/webstore" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

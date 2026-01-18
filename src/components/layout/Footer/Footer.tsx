import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}></div>
              <span>INTERCEPTLY</span>
            </div>
            <p>The privacy-first API mocking tool built for the modern developer.</p>
          </div>

          <div className={styles.linksCol}>
            <h4>Product</h4>
            <Link href="#">Extension Features</Link>
            <Link href="#">Changelog</Link>
            <Link href="#">CLI (Beta)</Link>
          </div>

          <div className={styles.linksCol}>
            <h4>Resources</h4>
            <Link href="#">Documentation</Link>
            <Link href="#">API Reference</Link>
            <Link href="#">GitHub Repository</Link>
          </div>

          <div className={styles.linksCol}>
            <h4>Legal</h4>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Settings</Link>
            <div className={styles.status}>
              <span className={styles.dot}></span>
              Status: Operational
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Interceptly Labs. All rights reserved.</p>
          <div className={styles.social}>
            <Link href="#">Twitter</Link>
            <Link href="#">Discord</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

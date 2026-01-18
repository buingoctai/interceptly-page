import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.png"
                alt="Interceptly Logo"
                width={64}
                height={64}
                className={styles.logoImage}
              />
              <span>INTERCEPTLY</span>
            </Link>
            <p>The privacy-first API mocking tool built for the modern developer.</p>
          </div>

          <div className={styles.linksCol}>
            <h4>Product</h4>
            <Link href="/#features">Extension Features</Link>
            <Link href="/changelog">Changelog</Link>
          </div>

          <div className={styles.linksCol}>
            <h4>Resources</h4>
            <Link href="/docs">Documentation</Link>
          </div>

          <div className={styles.linksCol}>
            <h4>Legal</h4>
            <Link href="/#privacy">Privacy Policy</Link>
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

import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
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

        <div className={styles.links}>
          <Link href="/#features">Features</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#privacy">Privacy</Link>
          <Link href="/#install">Install</Link>
        </div>

        <div className={styles.actions}>
          <Link href="#" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

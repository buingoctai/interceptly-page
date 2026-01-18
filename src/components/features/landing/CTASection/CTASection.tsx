import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section id="install" className={`${styles.cta} section`}>
      <div className="container">
        <div className={styles.banner}>
          <h2>
            Stop building backends
            <br />
            before you&apos;re ready.
          </h2>
          <p>Join our growing community of developers mocking APIs locally with Interceptly.</p>

          <div className={styles.actions}>
            <Link href="#" className={`${styles.button} ${styles.chrome}`}>
              <span className={styles.btnIcon}>📥</span>
              Add to Chrome
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

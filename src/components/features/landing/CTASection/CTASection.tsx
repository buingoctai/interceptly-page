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
            {process.env.NEXT_PUBLIC_EXTENSION_DOWNLOAD_MODE === "true" ? (
              <div className={styles.downloadGroup}>
                <a
                  href={`/downloads/${process.env.NEXT_PUBLIC_EXTENSION_FILENAME || "interceptly-extension.zip"}`}
                  download
                  className={`${styles.button} ${styles.chrome}`}
                >
                  <span className={styles.btnIcon}>📥</span>
                  Download Extension
                </a>
                <p className={styles.downloadNote}>
                  Manual installation required while under chrome extension store review.
                </p>
              </div>
            ) : (
              <Link
                href={process.env.NEXT_PUBLIC_EXTENSION_STORE_LINK || "#"}
                className={`${styles.button} ${styles.chrome}`}
              >
                <span className={styles.btnIcon}>📥</span>
                Add to Chrome
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

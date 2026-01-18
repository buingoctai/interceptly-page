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
          <p>Join 15,000+ developers mocking APIs locally with Interceptly.</p>

          <div className={styles.actions}>
            <button className={`${styles.button} ${styles.chrome}`}>
              <span className={styles.btnIcon}>📥</span>
              Add to Chrome
            </button>
            <button className={`${styles.button} ${styles.firefox}`}>
              <span className={styles.btnIcon}>🦊</span>
              Install for Firefox
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

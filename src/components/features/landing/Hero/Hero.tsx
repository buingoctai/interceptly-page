import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} section`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className="badge">PRIVACY-FIRST MOCKING</div>
            <h1>
              Free API Mocking,
              <br />
              <span className="text-gradient">Minus</span> the
              <br />
              Surveillance.
            </h1>
            <p className={styles.description}>
              LightWeight API Mocking. Zero-friction. No accounts. No cloud syncing.
              <br />
              Just local, high-performance interception directly in your browser.
            </p>
            <div className={styles.actions}>
              {process.env.NEXT_PUBLIC_EXTENSION_DOWNLOAD_MODE === "true" ? (
                <a
                  href={`/downloads/${process.env.NEXT_PUBLIC_EXTENSION_FILENAME || "interceptly-extension.zip"}`}
                  download
                  className="btn btn-primary"
                >
                  Download Extension (ZIP)
                </a>
              ) : (
                <Link
                  href={process.env.NEXT_PUBLIC_EXTENSION_STORE_LINK || "#"}
                  className="btn btn-primary"
                >
                  Add to Chrome &rarr;
                </Link>
              )}
              <Link href="/docs" className="btn btn-outline">
                View Documentation
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.mockupContainer}>
              <div className={styles.browserHeader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.extensionInfo}>EXTENSION V1.0.0</div>
              </div>
              <div className={styles.mockupContent}>
                <div className={styles.extensionRow}>
                  <div className={styles.extensionLogo}>
                    <div className={styles.miniIcon}></div>
                  </div>
                  <div className={styles.extensionStatus}>
                    <div className={styles.statusTitle}>Interceptor Active</div>
                    <div className={styles.statusSubtitle}>SITE: LOCALHOST:3000</div>
                  </div>
                  <div className={styles.toggle}></div>
                </div>

                <div className={styles.trafficHeader}>LIVE TRAFFIC</div>

                <div className={styles.requestItem}>
                  <div className={styles.reqMethod}>GET</div>
                  <div className={styles.reqPath}>/api/v1/user/profile</div>
                  <div className={styles.reqStatus}>200 OK</div>
                </div>

                <div className={styles.requestItem}>
                  <div className={styles.reqMethodPost}>POST</div>
                  <div className={styles.reqPath}>/api/auth/login</div>
                  <div className={styles.reqStatusMute}>SAVED</div>
                </div>

                <div className={styles.codeWindow}>
                  <div className={styles.codeHeader}>
                    Response Mock Body <span>JSON</span>
                  </div>
                  <pre className={styles.code}>
                    {`{
  "status": "success",
  "user": {
    "id": 8301,
    "role": "admin"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

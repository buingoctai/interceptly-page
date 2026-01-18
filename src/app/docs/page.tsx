import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Learn how to mock, redirect, and block API requests using Interceptly.",
};

export default function DocsPage() {
  return (
    <main className={styles.docs}>
      <Navbar />
      <div className="container">
        <header className={styles.header}>
          <div className="badge">DOCUMENTATION</div>
          <h1>How to use Interceptly</h1>
          <p className={styles.subtitle}>
            A LightWeight extension to mock, block, and redirect API requests directly in your
            browser.
          </p>
        </header>

        <section className={styles.section}>
          <h2>Network Rules</h2>
          <p>
            Interceptly allows you to create rules that intercept network traffic based on matching
            URL patterns. Our <strong>LightWeight</strong> approach ensures that everything happens
            locally without any cloud dependency.
          </p>

          <div className={styles.grid}>
            <div className={styles.info}>
              <h3>Types of Rules</h3>
              <ul>
                <li>
                  <strong>API Mocking:</strong> Intercept a request and return a custom JSON/text
                  response with any status code.
                </li>
                <li>
                  <strong>API Redirect:</strong> Reroute an API request from one URL to another
                  (e.g., redirect production API to localhost).
                </li>
                <li>
                  <strong>API Block:</strong> Prevent specific API calls from ever reaching the
                  server.
                </li>
              </ul>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/docs/dashboard-generic.png"
                alt="Interceptly Dashboard"
                width={800}
                height={400}
                className={styles.screenshot}
              />
              <p className={styles.caption}>
                The main dashboard where you manage your active rules.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.flex}>
            <div className={styles.half}>
              <h2>Rule Management</h2>
              <p>
                Toggle rules on and off with ease. Each rule can be edited or deleted individually.
                The interface is designed to be sleek, dark-themed, and intuitive for modern
                developers.
              </p>
              <Image
                src="/images/docs/rules-mobile.png"
                alt="My Rules View"
                width={300}
                height={500}
                className={styles.screenshotSmall}
              />
            </div>
            <div className={styles.half}>
              <h2>Network Activity</h2>
              <p>
                Monitor live traffic in real-time. See which requests are being intercepted and the
                resulting status codes and quick create rules.
              </p>
              <Image
                src="/images/docs/network-mobile.png"
                alt="Network Activity View"
                width={300}
                height={500}
                className={styles.screenshotSmall}
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="card">
            <h2>Why Interceptly?</h2>
            <p>
              Traditional tools often require heavy setup or account creation. Interceptly is{" "}
              <strong>LightWeight</strong>: no accounts, no trackers, and it stays entirely in your
              browser.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

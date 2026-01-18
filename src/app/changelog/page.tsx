import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Stay updated with the latest releases and structural features of Interceptly.",
};

export default function ChangelogPage() {
  const releases = [
    {
      version: "1.0.0",
      date: "January 2026",
      status: "Initial Release",
      features: [
        {
          title: "API Mocking",
          description:
            "Create custom JSON or Text responses with full status code control (200, 404, 500, etc.).",
        },
        {
          title: "API Redirecting",
          description:
            "Seamlessly reroute traffic from one domain to another. Perfect for redirecting production APIs to your local development server.",
        },
        {
          title: "API Blocking",
          description: "Stop unwanted network requests or analytics trackers with a single click.",
        },
        {
          title: "Privacy-First Storage",
          description:
            "All configurations are stored locally in your browser. Zero cloud dependencies, zero tracking.",
        },
        {
          title: "Developer Experience",
          description: "Dark mode interface, regex matching support, and instant rule toggling.",
        },
      ],
    },
  ];

  return (
    <main className={styles.changelog}>
      <Navbar />
      <div className="container">
        <header className={styles.header}>
          <div className="badge">CHANGELOG</div>
          <h1>What&apos;s New</h1>
          <p className={styles.subtitle}>
            Follow the latest updates and features added to Interceptly.
          </p>
        </header>

        <section className={styles.timeline}>
          {releases.map((release) => (
            <div key={release.version} className={styles.release}>
              <div className={styles.releaseHeader}>
                <div className={styles.versionInfo}>
                  <span className={styles.version}>{release.version}</span>
                  <span className={styles.date}>{release.date}</span>
                </div>
                <div className={styles.statusBadge}>{release.status}</div>
              </div>

              <div className={styles.featuresList}>
                {release.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}

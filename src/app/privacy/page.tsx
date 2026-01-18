import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Interceptly's Privacy Policy. We are local-first and collect zero user data.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.privacy}>
      <Navbar />
      <div className="container">
        <div className={styles.content}>
          <header className={styles.header}>
            <div className="badge">PRIVACY</div>
            <h1>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: January 18, 2026</p>
          </header>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Interceptly (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a browser
              extension dedicated to providing developer tools for API mocking, redirecting, and
              blocking. We take your privacy extremely seriously. Because our tool is designed for
              developers, we have built it with a <strong>Local-First</strong> architecture to
              ensure that your data never leaves your machine.
            </p>
          </section>

          <section>
            <h2>2. Data Collection & Usage</h2>
            <p>
              Interceptly does <strong>not</strong> collect, store, or transmit any persönlichen
              identifiable information (PII) or usage data to any remote server.
            </p>
            <ul>
              <li>
                <strong>No Tracking:</strong> We do not use analytics, trackers, or any telemetry
                services.
              </li>
              <li>
                <strong>No Accounts:</strong> You are not required to create an account to use
                Interceptly.
              </li>
              <li>
                <strong>No Cloud Sync:</strong> All rules, logs, and settings are stored locally.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Local Storage</h2>
            <p>
              All configurations, network interception rules, and temporary network logs are stored
              using your browser&apos;s <code>chrome.storage.local</code> API. This data resides
              entirely on your device and is not accessible by us or any third party. You can clear
              this data at any time by uninstalling the extension or using the &quot;Clear
              Data&quot; feature within the extension settings.
            </p>
          </section>

          <section>
            <h2>4. Browser Permissions</h2>
            <p>
              To function as an API mocking and interception tool, Interceptly requires several
              high-level browser permissions:
            </p>
            <ul>
              <li>
                <strong>declarativeNetRequest:</strong> Used to intercept and modify network
                requests according to the rules you define.
              </li>
              <li>
                <strong>storage:</strong> Used to save your rules and settings locally.
              </li>
              <li>
                <strong>scripting:</strong> Used to inject the interception logic into web pages
                where rules are active.
              </li>
              <li>
                <strong>&lt;all_urls&gt;:</strong> Necessary to allow the tool to intercept requests
                across different domains as specified by your rules.
              </li>
            </ul>
            <p>
              These permissions are used <strong>only</strong> for the literal functionality of the
              tool and never for data harvesting.
            </p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              Since your data stays on your machine, its security depends on the security of your
              device and browser. We do not have access to your data and therefore cannot lose it or
              have it breached from our side.
            </p>
          </section>

          <section>
            <h2>6. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last
              Updated&quot; date.
            </p>
          </section>

          <section>
            <h2>7. Contact Information</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to
              contact us at:
            </p>
            <p className={styles.contact}>taibn.dev@gmail.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

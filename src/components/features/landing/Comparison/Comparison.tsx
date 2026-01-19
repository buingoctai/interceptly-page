import styles from "./Comparison.module.css";

const comparisons = [
  {
    feature: "Account Required",
    interceptly: "No Account Needed",
    competitors: "Email / SSO Required",
    highlight: true,
  },
  {
    feature: "Data Storage",
    interceptly: "Local-Only (Your Device)",
    competitors: "Cloud Servers",
    highlight: true,
  },
  {
    feature: "Proxy / VPN Setup",
    interceptly: "Zero Config",
    competitors: "Complex Setup",
    highlight: false,
  },
  {
    feature: "Team & Seat Limits",
    interceptly: "Unlimited",
    competitors: "Pay per Seat",
    highlight: false,
  },
  {
    feature: "Onboarding Time",
    interceptly: "Instant (< 1 min)",
    competitors: "5-10 Minutes",
    highlight: false,
  },
  {
    feature: "Tracking & Analytics",
    interceptly: "None (Zero Data)",
    competitors: "Usage Tracking",
    highlight: true,
  },
];

export default function Comparison() {
  return (
    <section id="how-it-works" className={`${styles.comparison} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2>How we stack up</h2>
          <p>The clear choice for security-conscious developers.</p>
        </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.featureCol}>FEATURE</div>
            <div className={styles.interceptlyCol}>INTERCEPTLY</div>
            <div className={styles.competitorsCol}>COMPETITORS</div>
          </div>

          <div className={styles.tableBody}>
            {comparisons.map((item, index) => (
              <div key={index} className={styles.row}>
                <div className={styles.featureCell}>{item.feature}</div>
                <div className={styles.interceptlyCell}>
                  {item.highlight ? (
                    <span className={styles.badge}>{item.interceptly}</span>
                  ) : item.interceptly === "✓" ? (
                    <span className={styles.check}>✓</span>
                  ) : (
                    item.interceptly
                  )}
                </div>
                <div className={styles.competitorsCell}>
                  {item.competitors === "✗" ? (
                    <span className={styles.cross}>✗</span>
                  ) : (
                    item.competitors
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

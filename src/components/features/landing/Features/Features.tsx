import styles from "./Features.module.css";

const features = [
  {
    title: "Local Storage",
    description:
      "Your mock configurations stay in your browser. We don't have a backend, so we can't see your data even if we wanted to.",
    icon: "💾",
  },
  {
    title: "Zero Friction",
    description:
      'No "Sign up to continue" popups. Install the extension and start mocking your first endpoint in under 10 seconds.',
    icon: "⚡",
  },
  {
    title: "Dev Centric",
    description:
      "Full support for REST. Regular expression matching and delay simulation out of the box.",
    icon: "🛠️",
  },
];

export default function Features() {
  return (
    <section id="features" className={`${styles.features} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2>No Login Required. No Strings Attached.</h2>
          <p>
            We believe developer tools should stay out of your way. Start LightWeight mocking
            <br />
            immediately without creating an account or handing over your email.
          </p>
          <div id="privacy" className={styles.compliance}>
            <span className={styles.check}>✓</span> GDPR Compliant
          </div>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

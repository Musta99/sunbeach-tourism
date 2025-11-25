'use client';

import styles from './Hero.module.css';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Your Gateway to Dubai's Best <span>Hotels & Flight Deals</span>
        </h1>
        <p className={styles.subtitle}>
          Premium travel experiences with SunBeach Tourism Dubai
        </p>
        <div className={styles.ctas}>
          <button className="btn btn-primary" onClick={scrollToPackages}>
            Book Now
          </button>
          <button className="btn btn-outline" onClick={scrollToContact}>
            Contact Us
          </button>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>↓</span>
      </div>
    </section>
  );
}

import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🏖️</span>
              <span className={styles.logoText}>
                <strong>SunBeach</strong> Tourism Dubai
              </span>
            </div>
            <p className={styles.description}>
              Your trusted partner for unforgettable Dubai experiences. Creating memories 
              since 2010 with premium hotel bookings and flight deals.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Hotel Booking</a></li>
              <li><a href="#services">Flight Booking</a></li>
              <li><a href="#services">Holiday Packages</a></li>
              <li><a href="#services">City Tours</a></li>
              <li><a href="#packages">Special Offers</a></li>
              <li><a href="#about">Corporate Travel</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>📧 info@sunbeachtourism.ae</li>
              <li>📞 +971 4 123 4567</li>
              <li>📍 Dubai Marina, Dubai, UAE</li>
              <li>⏰ Mon-Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} SunBeach Tourism Dubai. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Service</a>
            <span>|</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

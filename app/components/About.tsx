import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About SunBeach Tourism Dubai</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80" 
              alt="Dubai Skyline" 
            />
          </div>
          <div className={styles.aboutText}>
            <h3>Your Trusted Travel Partner Since 2010</h3>
            <p>
              SunBeach Tourism Dubai is a premier travel agency specializing in creating unforgettable 
              Dubai experiences. With over a decade of expertise, we've helped thousands of travelers 
              discover the magic of this incredible city.
            </p>
            <p>
              Our team of local experts curates personalized travel packages that combine luxury 
              accommodations, exciting experiences, and seamless logistics. From budget-friendly 
              escapes to ultra-luxury getaways, we cater to every traveler's needs.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50K+</div>
                <div className={styles.statLabel}>Happy Travelers</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Hotel Partners</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>4.9★</div>
                <div className={styles.statLabel}>Customer Rating</div>
              </div>
            </div>

            <div className={styles.values}>
              <h4>What Makes Us Different</h4>
              <ul>
                <li>✓ <strong>Local Expertise:</strong> Deep knowledge of Dubai and UAE</li>
                <li>✓ <strong>Best Price Guarantee:</strong> Competitive rates on all bookings</li>
                <li>✓ <strong>24/7 Support:</strong> Always available for our guests</li>
                <li>✓ <strong>Tailored Experiences:</strong> Customized to your preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

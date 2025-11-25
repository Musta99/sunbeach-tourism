import styles from './Packages.module.css';

export default function Packages() {
  const packages = [
    {
      name: 'Dubai Beach Escape',
      price: '$899',
      duration: '5 Days / 4 Nights',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
      features: ['Beachfront Resort', 'Daily Breakfast', 'Airport Transfer', 'City Tour']
    },
    {
      name: 'Luxury City Experience',
      price: '$1,299',
      duration: '7 Days / 6 Nights',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
      features: ['5-Star Hotel', 'All Meals Included', 'Desert Safari', 'Burj Khalifa Tickets']
    },
    {
      name: 'Family Adventure Package',
      price: '$1,599',
      duration: '6 Days / 5 Nights',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80',
      features: ['Family Suite', 'Theme Park Tickets', 'Kids Activities', 'Private Guide']
    },
    {
      name: 'Romantic Getaway',
      price: '$1,899',
      duration: '5 Days / 4 Nights',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
      features: ['Luxury Suite', 'Couples Spa', 'Private Dinner', 'Yacht Cruise']
    },
    {
      name: 'Business Class Package',
      price: '$2,499',
      duration: '4 Days / 3 Nights',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80',
      features: ['Business Hotel', 'Meeting Rooms', 'Executive Lounge', 'Business Center Access']
    },
    {
      name: 'Ultimate Dubai Experience',
      price: '$3,299',
      duration: '10 Days / 9 Nights',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80',
      features: ['Luxury Resorts', 'All-Inclusive', 'Multiple Tours', 'VIP Experiences']
    }
  ];

  return (
    <section id="packages" className="section" style={{ background: 'var(--color-off-white)' }}>
      <div className="container">
        <h2 className="section-title">Featured Packages</h2>
        <div className={styles.packagesGrid}>
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`${styles.packageCard} card`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.packageImage}>
                <img src={pkg.image} alt={pkg.name} />
                <div className={styles.packagePrice}>{pkg.price}</div>
              </div>
              <div className={styles.packageContent}>
                <h3>{pkg.name}</h3>
                <p className={styles.duration}>⏱️ {pkg.duration}</p>
                <ul className={styles.features}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      icon: '🏨',
      title: 'Hotel Booking',
      description: 'Discover luxury and comfort in Dubai\'s finest hotels. From beachfront resorts to city center boutiques, we offer exclusive rates and packages.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'
    },
    {
      icon: '✈️',
      title: 'Flight Booking',
      description: 'Find the best flight deals to Dubai and beyond. We work with major airlines to bring you competitive prices and flexible options.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80'
    },
    {
      icon: '🏖️',
      title: 'Holiday Packages',
      description: 'All-inclusive vacation packages combining flights, hotels, and experiences. Tailored to your preferences and budget.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80'
    },
    {
      icon: '🌆',
      title: 'City Tours',
      description: 'Explore Dubai\'s iconic landmarks and hidden gems with our expert guides. From Burj Khalifa to traditional souks.',
      image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&q=80'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceCard} card`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.title} />
                <div className={styles.serviceIcon}>{service.icon}</div>
              </div>
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

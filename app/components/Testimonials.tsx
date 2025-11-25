import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'SunBeach Tourism made our Dubai vacation absolutely perfect! From the hotel to the tours, everything was seamless. The team went above and beyond to ensure we had an amazing experience.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%231DA1F2" width="100" height="100"/%3E%3Ctext fill="white" font-size="50" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ESJ%3C/text%3E%3C/svg%3E'
    },
    {
      name: 'Mohammed Al-Rashid',
      location: 'London, UK',
      rating: 5,
      text: 'I\'ve used many travel agencies, but SunBeach stands out. Their local knowledge and attention to detail made all the difference. Highly recommend for anyone planning a Dubai trip!',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23FACC15" width="100" height="100"/%3E%3Ctext fill="black" font-size="50" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EMA%3C/text%3E%3C/svg%3E'
    },
    {
      name: 'Emily Chen',
      location: 'Singapore',
      rating: 5,
      text: 'Our family had the best vacation thanks to SunBeach! They tailored the package to our needs perfectly. The kids loved the theme parks, and we enjoyed the luxury hotel. 5 stars!',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%231DA1F2" width="100" height="100"/%3E%3Ctext fill="white" font-size="50" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EEC%3C/text%3E%3C/svg%3E'
    },
    {
      name: 'James Rodriguez',
      location: 'Madrid, Spain',
      rating: 5,
      text: 'Exceptional service from booking to check-out. The romantic package was perfect for our anniversary. SunBeach Tourism knows how to create magical experiences!',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23FACC15" width="100" height="100"/%3E%3Ctext fill="black" font-size="50" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EJR%3C/text%3E%3C/svg%3E'
    }
  ];

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--color-off-white)' }}>
      <div className="container">
        <h2 className="section-title">What Our Travelers Say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`${styles.testimonialCard} card`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <div className={styles.author}>
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorLocation}>{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

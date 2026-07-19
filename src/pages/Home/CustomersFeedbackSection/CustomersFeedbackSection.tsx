import { useState } from 'react'
import styles from './CustomersFeedbackSection.module.css'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
  accent: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Starla Virgoun',
    role: 'Financial advisor',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam',
    avatar: 'img/customers/starla-virgoun.png',
    accent: '#E2572B',
  },
  {
    name: 'Owen Castillo',
    role: 'Product designer',
    quote:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    avatar: 'img/customers/owen-castillo.png',
    accent: '#E8B23D',
  },
  {
    name: 'Maren Ito',
    role: 'Marketing lead',
    quote:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
    avatar: 'img/customers/maren-ito.png',
    accent: '#7C8B6F',
  },
  {
    name: 'Priya Nandan',
    role: 'Founder, Loomstate',
    quote:
      'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi',
    avatar: 'img/customers/priya-nandan.png',
    accent: '#D98CA0',
  },
]

export default function CustomersFeedbackSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = testimonials[activeIndex]

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our customers say</h2>
      <div className={styles.content}>
        <div className={styles.avatarLarge}>
          <img src={current.avatar} alt={current.name} />
        </div>
        <h3 className={styles.name}>{current.name}</h3>
        <p className={styles.role}>{current.role}</p>

        <div className={styles.quoteBlock}>
          <span className={styles.quoteMarkLeft}>&ldquo;</span>
          <p className={styles.quote}>{current.quote}</p>
          <span className={styles.quoteMarkRight}>&rdquo;</span>
        </div>
      </div>
      <div className={styles.thumbRow}>
        {testimonials.map((t, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={t.name}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              className={isActive ? styles.thumbActive : styles.thumb}
              style={
                isActive ? { boxShadow: `0 0 0 3px ${t.accent}` } : undefined
              }
            >
              <img src={t.avatar} alt={t.name} />
            </button>
          )
        })}
      </div>
    </section>
  )
}

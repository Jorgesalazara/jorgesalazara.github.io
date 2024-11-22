'use client';
import { useState } from 'react';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    id: 1,
    title: 'AirCalling Landing Page Design',
    category: 'Web Design',
    image: '/aircalling.jpg', // Replace with your image URL
  },
  {
    id: 2,
    title: 'Business Landing Page Design',
    category: 'Web Design',
    image: '/business.jpg', // Replace with your image URL
  },
  {
    id: 3,
    title: 'Ecom Web Page Design',
    category: 'Web Design',
    image: '/ecom.jpg', // Replace with your image URL
  },
  {
    id: 4,
    title: 'Mobile App UI Design',
    category: 'App Design',
    image: '/app.jpg', // Replace with your image URL
  },
];

const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus.
      </p>

      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${
              activeCategory === category ? styles.active : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.cardContent}>
              <span className={styles.category}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

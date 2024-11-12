import Link from 'next/link';
import styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} /> {/* Adjust logo path */}
        <span>JORGE SALAZAR</span>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><a href="/resume.pdf" className={styles.downloadButton} download>Download CV</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

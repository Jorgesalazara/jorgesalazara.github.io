import Image from "next/image";
import styles from "../Styles/FirstSection.module.css";

export default function FirstSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.intro}>
        <p>Hi I am</p>
        <h1>Jorge Salazar</h1>
        <h2>UI & UX Designer</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
          Aliquet donec morbi convallis pretium. Turpis tempus pharetra
        </p>
      
      </div>
      <div className={styles.profileImage}>
        <Image src="/profile.jpg" alt="Profile Picture" width={250} height={250} className={styles.image}/>
      </div>
      <div className={styles.socialLinks}>
        {/* Icons for social links */}
        <a href="#" aria-label="Facebook" className={styles.icon}><i className="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter" className={styles.icon}><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="Instagram" className={styles.icon}><i className="fab fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn" className={styles.icon}><i className="fab fa-linkedin-in"></i></a>
      </div>
    </section>
  );
}

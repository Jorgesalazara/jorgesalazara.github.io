import styles from "../Styles/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <h2>About Me</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
        Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
      </p>
      
      <div className={styles.skills}>
        <div className={styles.skill}>
          <span>UX</span>
          <div className={styles.skillBar}>
            <div className={styles.skillLevel} style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <span>Website Design</span>
          <div className={styles.skillBar}>
            <div className={styles.skillLevel} style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <span>App Design</span>
          <div className={styles.skillBar}>
            <div className={styles.skillLevel} style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <span>Graphic Design</span>
          <div className={styles.skillBar}>
            <div className={styles.skillLevel} style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

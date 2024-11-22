'use client;'
import Image from "next/image";
import styles from "./page.module.css";
import FirstSection from "./Components/FirstSection";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";

export default function Home() {
  return (
    
    <div className={styles.page}>
      <main className={styles.main}>
       <FirstSection/>
       <AboutSection/>
       <ProjectsSection/>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
   
  );
}

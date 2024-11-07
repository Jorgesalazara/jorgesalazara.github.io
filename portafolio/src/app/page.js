'use client;'
import Image from "next/image";
import styles from "./page.module.css";
import FirstSection from "./Components/FirstSection";
import AboutSection from "./Components/AboutSection";

export default function Home() {
  return (
    
    <div className={styles.page}>
      <main className={styles.main}>
       <FirstSection/>
       <AboutSection/>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
   
  );
}

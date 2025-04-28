import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import im from '../../public/SC_Full.png'
const Hero = () => {
  return (
    <section className={styles.hero}>
    <div className={styles.waveBackground}>
      <div className={styles.content}>
        <h1 className={styles.title}>Accelerate Your DevOps Journey</h1>
        <p className={styles.subtitle}>Streamline development, automate delivery, and scale operations with expert DevOps consulting. Build faster, safer, and smarter. </p>
        <button className={styles.button}>Let's build</button>  
      </div>
    </div>
  </section>
  )
}

export default Hero
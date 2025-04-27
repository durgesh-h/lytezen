import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import im from '../../public/SC_Full.png'
const Hero = () => {
  return (
    <section className={styles.hero}>
    <div className={styles.waveBackground}>
      <div className={styles.content}>
        <h1 className={styles.title}>A Strategic Niche Marketing System for Financial Advisors</h1>
        <p className={styles.subtitle}>Stop Relying on Referrals Alone</p>
        <button className={styles.button}>Schedule a Call</button>
        <div className={styles.imagePlaceholder}>
          <Image src={im} width={200} height={200} alt="Financial Advisor" className={styles.heroImage} />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
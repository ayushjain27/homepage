import React from 'react';
import styles from './Homepage.module.css'

const Homepage = () => {
  return (
    <>
        <nav className={`${styles.nav} d-flex align-items-center`}>
            <div className={styles.logo}>
                <img className={styles.img} src="./Images/logo.png" alt="" />
            </div>
            <div className={`${styles.navLinks} nav-links`}>
                <ul>
                    <li className={styles.li}><a className={styles.a} href="/">Home</a></li>
                    <li className={styles.li}><a className={styles.a} href="/">Phone</a></li>
                    <li className={styles.li}><a className={styles.a} href="/">Accessories</a></li>
                    <li className={styles.li}><a className={styles.a} href="/">Cart</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Homepage

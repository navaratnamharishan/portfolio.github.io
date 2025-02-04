import React from 'react';
import { getImageUrl } from '../../utils';

import styles from "./About.module.css";


export const About = () => {
    return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage}  src={getImageUrl("about3.jpg")} alt='he sitting with laptop'/> 
            </div>
    
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
        <img className={styles.subj} src={getImageUrl("cursorIcon.png")} alt="curser"/>
        
    <div className={styles.aboutItemText}>
        <h3>Front-end Developer</h3>
        <p>I'm a Frontend developer experience in buiding responcive and optimized sites</p>
    </div>
    </li>
    <li className={styles.aboutItem}>
    <img  className={styles.subj} src={getImageUrl("uiIcon.png")} alt="Server"/>
    <div className={styles.aboutItemText}>
        <h3>Back-end Developer</h3>
        <p>I have experience  developing fast and optimised back-end systems and APIs </p>
    </div>
    </li>
 
    </ul>
    </section>
    )
}

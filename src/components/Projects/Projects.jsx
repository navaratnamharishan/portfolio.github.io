import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";


export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.titleMain}>Projects</h2>
      <div className={styles.contain}>
     
      <div className={styles.projects}>
        <img src={getImageUrl("images.jpeg")}  className={styles.img} alt="project-img"/>
        
        <h5 className={styles.title}> Ear-Bliss</h5>
        <p className={styles.Description}>Ear-Blis is full stack e-commerce web site. in this website covers Authentication and user can choose the product add to the cart & etc. total value will visible  </p>
        <ul className={styles.skills}>
          <li className={styles.skill}>React</li>
          <li className={styles.skill}>Java</li>
          <li className={styles.skill}>MySql</li>
         
          </ul>
          <div className={styles.links}>
        
        <a className={styles.link} href="https://github.com/navaratnamharishan/earBliss">Front-end</a>
        <a className={styles.link} href="https://github.com/navaratnamharishan/earBliss-backend" >Back-end</a>
        </div>
          </div>

          
          </div>  

          <div className={styles.contain}>
     
     <div className={styles.projects}>
       <img src={getImageUrl("download (4).jpeg")}  className={styles.img} alt="project-img"/>
       
       <h5 className={styles.title}> Lgb</h5>
       <p className={styles.Description}>Lgb is one of  e-commerce web site. in this website covers Authentication and user can choose the product add to the cart & etc. total value will visible  </p>
       <ul className={styles.skills}>
         
         <li className={styles.skill}>Java</li>
         <li className={styles.skill}>MySql</li>
        
         </ul>
         <div className={styles.links}>
       
       
       <a className={styles.link} href=" https://github.com/navaratnamharishan/Assignment-1" >Back-end</a>
       </div>
         </div>

         
         </div>  
    </section>
  );
};
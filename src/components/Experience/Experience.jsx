import React from 'react';

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skill}>
            {skills.map((skills,id) => {
                return(
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img className={styles.skillImgs} src={getImageUrl(skills.imageSrc)} alt={skills.title}/>
                        </div>
                    <p>{skills.title}</p>
                    </div>
                );
            })}
            
        </div>
        <div className={styles.history}>
        <ul >
            {history.map((historyItem,id)=>{
                return(
                    <li key={id} className={styles.historyItem}>
                        <img src={getImageUrl("codeAlpha.jpeg")} alt={`${historyItem.organisation} Logo`}/>

<div className={styles.historyItemDetails}>
    <h3>{`${historyItem.role} - ${historyItem.organaisation}`} </h3>
    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
  
        </div>        
           </li>
                );
            })}
        </ul></div>
       <div className={styles.cvBtn}> <a href={getImageUrl("Harishan's-Resume.pdf")}download="Harishan.pdf">
  <button className={styles.cvbtnn}>Download My CV</button>
</a>
</div>
        </div>
      
    </section>
  );
};

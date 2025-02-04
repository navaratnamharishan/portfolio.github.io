import React from 'react';
import styles from "./Footer.module.css";
import { getImageUrl } from '../../utils';
import { Form } from 'react-router-dom';

export const Footer = () => {
  return (
    <section className={styles.container} id='footer'>
         <div class={styles.comment}>
            <h4>Leave a Comment</h4>
            <form action="your-backend-handler" method="POST">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name"/>
                
                <label for="email">Your Email</label>
                <input type="email" id="email" name="email" required placeholder="Your email"/>

                <label for="comment">Comment</label>
                <textarea id="comment" name="comment" rows="4" required placeholder="Your comment..."></textarea>
                
                <button type="submit" class={styles.btn}>Send Comment</button>
            </form>
        </div>

        <div className={styles.contact}>
        <a href='navaratnamharidhan@gmail.com'> <img src={getImageUrl("gmail.png")} alt='email'   /></a>
        <a href='0704605222'>  <img src={getImageUrl("outgoing-call.png")} alt='phone'/></a>
            
        <a href='https://www.linkedin.com/in/harishan-navaratnam-16a14b2a4'>  <img src={getImageUrl("linkedin.png")} alt='LinkedIn'/></a>
        <a href='https://github.com/navaratnamharishan'> <img src={getImageUrl("github.png")} alt='GitHum '/></a>
        </div>

        <div className={styles.contactSocial}>
          <a href='https://www.instagram.com/harish_warma?igsh=MWYyNnM4aGVwdHRp'>  <img src={getImageUrl("instagram.png")} alt='email'/></a>
           <a href='https://www.facebook.com/harishan.harishan.984'> <img src={getImageUrl("faceBook.png")} alt='phone'/></a>
          <a href='https://wa.me/qr/GQ4CBEQ6UBL7P1'>  <img src={getImageUrl("whatsapp.png")} alt='phone'/></a>
            
        </div>
        <div className={styles.footer}>
            <p>&copy; 2025 Harishan Navarathnam. All rights reserved.</p>
        </div>
    </section>
  );
  
};

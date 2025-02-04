import React,{useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import menuIcon from  '/assets/nav/menuIcon.png';
import cancelIcon from  '/assets/nav/closeIcon.png';


export const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);

  return (
  <nav className={styles.navbar}>
    <a href="/" className={styles.title}>Portfolio</a>

    <div className={styles.menu}>
<img className={styles.menuBtn} 
src={menuOpen ? cancelIcon:menuIcon} onClick={() =>setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#footer">Contact</a>
            </li>
        </ul>
    </div>
  </nav>
    
  )
}

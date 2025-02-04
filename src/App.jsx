import style from'./App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
  <div className={style.App}>
  <Navbar/>
<Hero />
<About/>
<Experience/>
<Projects/>
<Footer/>
  </div>

  );
}

export default App

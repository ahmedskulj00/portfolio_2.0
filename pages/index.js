import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import DottedPart from "../components/helpers/DottedPart";
import styles from "../styles/Home.module.css";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.dottedpart_container}>
        <DottedPart />
      </div>
      <About />
      <div className={styles.dottedpart_container}>
        <DottedPart />
      </div>
      <Skills />
      <Experience />
      <div className={styles.dottedpart_container}>
        <DottedPart />
      </div>
      <Projects />
    </div>
  );
}

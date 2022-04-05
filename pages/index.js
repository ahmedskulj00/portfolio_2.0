import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import DottedPart from "../components/helpers/DottedPart";
import styles from "../styles/Home.module.css";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.dottedpart_container}>
        <DottedPart />
      </div>
      <About />
    </div>
  );
}

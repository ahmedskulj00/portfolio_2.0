import About from "../components/about/About";
import Navbar from "../components/navbar/Navbar";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      {/* <Skills /> */}
      <Work />
    </div>
  );
}

import React, { useEffect } from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Movie from "../images/movie.png";
import Expenses from "../images/expenses.png";
import Crypto from "../images/crypto.png";
import Timeline from "../images/timeline.png";
import HistoryQuiz from "../images/history.png";
import TicTacToe from "../images/tictactoe.png";
import Button from "./helpers/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.title_container}>
          <h3 data-aos="fade">My Projects</h3>
          <p data-aos="fade">
            Over time I have created over 20+ repositories on my GitHub profile.
            Here you can see some of my projects, to see all of them make sure
            to check my GitHub profile
          </p>
        </div>
        <div className={styles.grid_container} data-aos="fade">
          <div className={styles.grid_item}>
            <Image src={Movie} alt="movie_app" />
            <a
              href="https://github.com/ahmedskulj00/react-movie-app"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.image_overlay}>
                <h4>Movie App</h4>
              </div>
            </a>
          </div>
          <div className={styles.grid_item}>
            <Image src={Expenses} alt="expenses_app" />
            <a
              href="https://github.com/ahmedskulj00/react-expense-tracker"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.image_overlay}>
                <h4>Expense Tracker</h4>
              </div>
            </a>
          </div>
          <div className={styles.grid_item}>
            <Image src={Crypto} alt="crypto_app" />
            <a
              href="https://github.com/ahmedskulj00/react-crypto-info"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.image_overlay}>
                <h4>Crypto Info</h4>
              </div>
            </a>
          </div>
          <div className={styles.grid_item}>
            <Image src={Timeline} alt="timeline_app" />
            <a
              href="https://github.com/ahmedskulj00/Timeline"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.image_overlay}>
                <h4>Timeline</h4>
              </div>
            </a>
          </div>
          <div className={styles.grid_item}>
            <Image src={HistoryQuiz} alt="history_quiz" />
            <a
              href="https://github.com/ahmedskulj00/react-quiz-app"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.image_overlay}>
                <h4>History Quiz</h4>
              </div>
            </a>
          </div>
          <div className={styles.grid_item}>
            <Image src={TicTacToe} alt="tictactoe" />
            <a
              href="https://github.com/ahmedskulj00/Javascript-TicTacToe"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.image_overlay}>
                <h4>Tic Tac Toe</h4>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.button_container} data-aos="fade">
          <a
            href="https://github.com/ahmedskulj00"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              text="View All"
              isPrimary={true}
              width="241px"
              height="83px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Movie from "../images/movie.png";
import Expenses from "../images/expenses.png";
import Crypto from "../images/crypto.png";
import Timeline from "../images/timeline.png";
import HistoryQuiz from "../images/history.png";
import TicTacToe from "../images/tictactoe.png";
import Button from "./helpers/Button";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.title_container}>
          <h3>My Projects</h3>
          <p>
            Over time I have created over 20+ repositories on my GitHub profile.
            Here you can see some of my projects, to see all of them make sure
            to check my GitHub profile
          </p>
        </div>
        <div className={styles.grid_container}>
          <div className={styles.grid_item}>
            <Image src={Movie} />
            <div className={styles.image_overlay}>
              <h4>Movie App</h4>
              <a
                href="https://github.com/ahmedskulj00/react-movie-app"
                target="_blank"
              >
                Check Here
              </a>
            </div>
          </div>
          <div className={styles.grid_item}>
            <Image src={Expenses} />
            <div className={styles.image_overlay}>
              <h4>Expense Tracker</h4>
              <a
                href="https://github.com/ahmedskulj00/react-expense-tracker"
                target="_blank"
              >
                Check Here
              </a>
            </div>
          </div>
          <div className={styles.grid_item}>
            <Image src={Crypto} />
            <div className={styles.image_overlay}>
              <h4>Crypto Info</h4>
              <a
                href="https://github.com/ahmedskulj00/react-crypto-info"
                target="_blank"
              >
                Check Here
              </a>
            </div>
          </div>
          <div className={styles.grid_item}>
            <Image src={Timeline} />
            <div className={styles.image_overlay}>
              <h4>Timeline</h4>
              <a
                href="https://github.com/ahmedskulj00/Timeline"
                target="_blank"
              >
                Check Here
              </a>
            </div>
          </div>
          <div className={styles.grid_item}>
            <Image src={HistoryQuiz} />
            <div className={styles.image_overlay}>
              <h4>History Quiz</h4>
              <a
                href="https://github.com/ahmedskulj00/react-quiz-app"
                target="_blank"
              >
                Check Here
              </a>
            </div>
          </div>
          <div className={styles.grid_item}>
            <Image src={TicTacToe} />
            <div className={styles.image_overlay}>
              <h4>Tic Tac Toe</h4>
              <a
                href="https://github.com/ahmedskulj00/Javascript-TicTacToe"
                target="_blank"
              >
                Check Here
              </a>
            </div>
          </div>
        </div>
        <div className={styles.button_container}>
          <a href="https://github.com/ahmedskulj00" target="_blank">
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

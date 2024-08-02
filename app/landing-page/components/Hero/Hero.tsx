import React from "react";
import Button from "./Button/Button";
import Image from "next/image";
import logo from "public/Logo/logo.svg";

import styles from "./hero.module.css";

interface Props {
  setShowQuizModal: (value: boolean) => void;
}

const Hero: React.FC<Props> = ({ setShowQuizModal }) => {
  return (
    <div className={styles.hero}>
      <Image src={logo} alt="Manual.co" className={styles.heroLogo} />
      <div className={styles.heroCaption}>
        <h1 className={styles.heroTitle}>
          Be good <br />
          to yourself
        </h1>
        <p className={styles.heroDescription}>
          We're working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <Button onClick={() => setShowQuizModal(true)}></Button>
      </div>
    </div>
  );
};

export default Hero;

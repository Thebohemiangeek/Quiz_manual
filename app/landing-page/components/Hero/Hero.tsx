import React from "react";
import Button from "./Button/Button";
import Image from "next/image";
import logo from "public/Logo/Logo.svg";

import styles from "./hero.module.css";

interface Props {
  setShowQuizModal: (value: boolean) => void;
}

const Hero: React.FC<Props> = ({ setShowQuizModal }) => {
  return (
    <section className={styles.hero}>
      <Image
        src={logo}
        alt="Manual.co"
        className={styles.hero__logo}
        priority
      />
      <div className={styles.hero__caption}>
        <h1 className={styles.hero__title}>
          Be good <br />
          to yourself
        </h1>
        <p className={styles.hero__text}>
          We're working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <Button onClick={() => setShowQuizModal(true)}></Button>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import styles from "./Section.module.css";
import Section from "./Section";

const MainSection: React.FC = () => {
  return (
    <div className={styles.section__wrapper}>
      <h1 className={styles.section_title}>What we can help with</h1>
      <Section identifier="hairLoss" />
      <Section identifier="erectileDysfunction" reversed />
    </div>
  );
};

export default MainSection;

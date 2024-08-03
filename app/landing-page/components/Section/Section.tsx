import Image from "next/image";
import styles from "./Section.module.css";
import Hairloss from "public/img/hairlossman.png";
import ErectionMan from "public/img/erectionman.png";
import data from "public/data/section.json";

interface SectionProps {
  identifier: keyof typeof data;
  reversed?: boolean;
}

// Mapping keys to actual image imports
const imageMap = {
  hairLoss: Hairloss,
  erectileDysfunction: ErectionMan,
};

const Section = ({ identifier, reversed }: SectionProps) => {
  const sectionData = data[identifier];

  if (!sectionData) {
    return <p>Invalid section identifier</p>;
  }

  const { title, topic, image, number, text, imageDescription } = sectionData;
  const imageUrl = imageMap[image as keyof typeof imageMap];

  return (
    <section
      data-testid="section-content"
      className={`${styles.section} ${
        reversed ? styles["section--reversed"] : ""
      }`}
    >
      <Image
        src={imageUrl}
        alt={imageDescription}
        width={370}
        height={445}
        className={styles.section_image}
      />
      <div
        className={`${styles.section_textContent} ${
          reversed ? styles["section_textContent--reversed"] : ""
        }`}
        data-section={number}
      >
        <span className={styles.section_topic}>{topic}</span>
        <h3 className={styles.section_title}>{title}</h3>
        <p className={styles.section_text}>{text}</p>
      </div>
    </section>
  );
};

export default Section;

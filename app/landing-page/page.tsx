"use client";

import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import Quiz from "./components/Quiz/Quiz";
import styles from "./components/Hero/hero.module.css"; // Adjust the import as needed

interface LandingPageProps {
  quizData: {
    questions: {
      question: string;
      type: string;
      options: {
        display: string;
        value: string | boolean;
        isRejection: boolean;
      }[];
    }[];
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ quizData }) => {
  const [showQuizModal, setShowQuizModal] = useState(false);

  const handleCloseModal = () => setShowQuizModal(false);

  return (
    <div>
      <Hero setShowQuizModal={setShowQuizModal} />
      <Modal
        show={showQuizModal}
        handleClose={handleCloseModal}
        className={styles.customModal}
      >
        <Quiz questions={quizData.questions} />
      </Modal>
    </div>
  );
};

export default LandingPage;

"use client";

import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import Quiz from "./components/Quiz/Quiz";
import MainSection from "./components/Section/MainSection";
import Footer from "./components/Footer/Footer";
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

const defaultQuestions = [
  {
    question: "Which image best matches your hair loss?",
    type: "ChoiceType",
    options: [
      {
        display:
          '<img alt="Temples" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />',
        value: "Temples",
        isRejection: false,
      },
      {
        display:
          '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402x.png 2x"/>',
        value: "Temples & Crown",
        isRejection: false,
      },
      {
        display:
          '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>',
        value: "Patchy",
        isRejection: true,
      },
      {
        display:
          '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.png 2x" />',
        value: "Moderate",
        isRejection: false,
      },
      {
        display:
          '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.png 2x"/>',
        value: "Extensive",
        isRejection: true,
      },
      {
        display:
          '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.png 2x" />',
        value: "Complete",
        isRejection: true,
      },
    ],
  },
  {
    question:
      "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
    type: "ChoiceType",
    options: [
      {
        display: "Yes",
        value: true,
        isRejection: true,
      },
      {
        display: "No",
        value: false,
        isRejection: false,
      },
    ],
  },
  {
    question:
      "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
    type: "ChoiceType",
    options: [
      {
        display: "Yes",
        value: true,
        isRejection: true,
      },
      {
        display: "No",
        value: false,
        isRejection: false,
      },
    ],
  },
];

const LandingPage: React.FC<LandingPageProps> = ({ quizData }) => {
  const [showQuizModal, setShowQuizModal] = useState(false);
  const handleCloseModal = () => setShowQuizModal(false);
  const questions = quizData?.questions.length
    ? quizData.questions
    : defaultQuestions;

  return (
    <div>
      <Hero setShowQuizModal={setShowQuizModal} />
      <Modal
        show={showQuizModal}
        handleClose={handleCloseModal}
        className={styles.customModal}
      >
        <Quiz questions={questions} />
      </Modal>
      <MainSection />
      <Footer />
    </div>
  );
};

export default LandingPage;

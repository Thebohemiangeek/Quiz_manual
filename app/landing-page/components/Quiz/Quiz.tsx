import React, { useState } from "react";
import Question from "./Question";
import Image from "next/image";
import logo from "public/Logo/logo.svg";
import styles from "./Quiz.module.css";
import doctor from "public/img/clinician.png";

interface Props {
  questions: {
    question: string;
    type: string;
    options: {
      display: string;
      value: string | boolean;
      isRejection: boolean;
    }[];
  }[];
}

const Quiz: React.FC<Props> = ({ questions }) => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [userResponses, setUserResponses] = useState<{
    [key: string]: string | boolean;
  }>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSetResponse = (question: string, response: string | boolean) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [question]: response,
    }));
  };

  const handleSubmitQuiz = () => {
    setIsCompleted(true);
  };

  const handlePreviousQuestion = () => {
    if (activeQuestion > 1) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    if (activeQuestion < questions.length) {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const currentQuestionAnswered = userResponses.hasOwnProperty(
    questions[activeQuestion - 1].question
  );

  return (
    <div className={styles.quizContainer}>
      <header className={styles.quizHeader}>
        <Image src={logo} alt="Manual.co" className={styles.heroLogo} />
      </header>
      {!isCompleted && (
        <>
          {questions.map((item, index) =>
            index + 1 === activeQuestion ? (
              <Question
                userResponses={userResponses}
                handleSetResponse={handleSetResponse}
                key={item.question.replace(" ", "+")}
                data={item}
                number={index + 1}
                activeQuestion={activeQuestion}
              />
            ) : null
          )}
          <div className={styles.navigationButtons}>
            {activeQuestion > 1 && (
              <button
                onClick={handlePreviousQuestion}
                className={styles.navButton}
                data-testid="previous-button"
              >
                Previous
              </button>
            )}
            {currentQuestionAnswered && activeQuestion < questions.length && (
              <button
                onClick={handleNextQuestion}
                className={styles.navButton}
                data-testid="next-button"
              >
                Next
              </button>
            )}
            {currentQuestionAnswered && activeQuestion === questions.length && (
              <button
                onClick={handleSubmitQuiz}
                className={styles.navButton}
                data-testid="submit-button"
              >
                Submit
              </button>
            )}
          </div>
        </>
      )}
      {isCompleted && (
        <section className={styles.quizResult}>
          {Object.values(userResponses).includes(true) ? (
            <div className={styles.quizResult}>
              <Image
                src={doctor}
                alt="Dr. Earim Chaudry"
                className={styles.imageResults}
              />
              <p className={styles.imageText} data-testid="rejection-text">
                Earim Chaudry, Medical director
              </p>
              <p
                className={styles.quizResultMessage}
                data-testid="rejection-message"
              >
                Unfortunately, we are unable to prescribe this medication for
                you. This is because finasteride can alter the PSA levels, which
                may be used to monitor for cancer. You should discuss this
                further with your GP or specialist if you would still like this
                medication.
              </p>
            </div>
          ) : (
            <div className={styles.quizResult}>
              <Image
                src={doctor}
                alt="Dr. Earim Chaudry"
                className={styles.imageResults}
              />{" "}
              <p className={styles.imageText} data-testid="approval-text">
                Earim Chaudry, Medical director
              </p>
              <p
                className={styles.quizResultMessage}
                data-testid="approval-message"
              >
                Great news! We have the perfect treatment for your hair loss.
                Proceed to{" "}
                <a
                  href="https://www.manual.co/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  www.manual.co
                </a>
                , and prepare to say hello to your new hair!
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Quiz;

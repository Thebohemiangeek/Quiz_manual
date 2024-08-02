import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (Object.keys(userResponses).length === questions.length) {
      handleSubmitQuiz();
    }
  }, [userResponses, questions.length]);

  const handleSetResponse = (
    question: string,
    response: string | boolean,
    questionNumber: number
  ) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [question]: response,
    }));

    if (questionNumber < questions.length) {
      setActiveQuestion(questionNumber + 1);
    }
  };

  const handleSubmitQuiz = () => {
    setIsCompleted(true);
  };

  return (
    <div className={styles.quizContainer}>
      <header className={styles.quizHeader}>
        <Image src={logo} alt="Manual.co" className={styles.heroLogo} />
      </header>
      {!isCompleted &&
        questions.map((item, index) => (
          <Question
            userResponses={userResponses}
            handleSetResponse={handleSetResponse}
            key={item.question.replace(" ", "+")}
            data={item}
            number={index + 1}
            activeQuestion={activeQuestion}
          />
        ))}

      {isCompleted && (
        <section className={styles.quizResult}>
          {Object.values(userResponses).includes(true) ? (
            <div className={styles.quizResult}>
              <Image
                src={doctor}
                alt="Dr. Earim Chaudry"
                className={styles.imageResults}
              />
              <p className={styles.imageText}>
                Earim Chaudry, Medical director
              </p>
              <p className={styles.quizResultMessage}>
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
              <p className={styles.imageText}>
                Earim Chaudry, Medical director
              </p>
              <p className={styles.quizResultMessage}>
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

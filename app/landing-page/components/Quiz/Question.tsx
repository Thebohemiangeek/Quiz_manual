import React from "react";
import styles from "./Quiz.module.css";

interface QuestionProps {
  data: {
    question: string;
    type: string;
    options: {
      display: string;
      value: string | boolean;
      isRejection: boolean;
    }[];
  };
  number: number;
  activeQuestion: number;
  userResponses: { [key: string]: string | boolean };
  handleSetResponse: (
    question: string,
    response: string | boolean,
    questionNumber: number
  ) => void;
}

const Question: React.FC<QuestionProps> = ({
  data: { options, question },
  number,
  activeQuestion,
  handleSetResponse,
  userResponses,
}) => {
  const renderOptions = (): React.ReactNode => {
    return options.map((option, index) => (
      <div
        className={`${styles.quiz__item} ${
          userResponses[question] === option.value ? styles.quiz__selected : ""
        }`}
        data-testid="option"
        key={index}
        onClick={() => handleSetResponse(question, option.value, number)}
      >
        <div
          className={styles.quiz__label}
          dangerouslySetInnerHTML={{ __html: option.display }}
        ></div>
      </div>
    ));
  };

  if (number !== activeQuestion) {
    return null;
  }

  return (
    <div className={styles.quizModal_question} data-testid="question">
      <h4 className={styles.quiz__label}>{`Question ${number}`}</h4>
      <h1 className={styles.quiz__question_title}>{question}</h1>
      <div className={styles.quiz__options} data-testid="options-list">
        {renderOptions()}
      </div>
    </div>
  );
};

export default Question;

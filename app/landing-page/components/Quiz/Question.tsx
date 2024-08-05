import React from "react";
import styles from "./Quiz.module.css";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

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
    return options.map((option, index) => {
      const sanitizedHtml = DOMPurify.sanitize(option.display);
      return (
        <div
          className={`${styles.quiz__item} ${
            userResponses[question] === option.value
              ? styles.quiz__selected
              : ""
          }`}
          data-testid="option"
          key={index}
          onClick={() => handleSetResponse(question, option.value, number)}
          aria-label={
            typeof option.value === "boolean"
              ? option.value
                ? "Yes"
                : "No"
              : option.value
          }
        >
          <div className={styles.quiz__label}>{parse(option.display)}</div>
        </div>
      );
    });
  };

  if (number !== activeQuestion) {
    return null;
  }

  return (
    <div className={styles.quiz__question_container} data-testid="question">
      <h4 className={styles.quiz__label}>{`Question ${number}`}</h4>
      <h1 className={styles.quiz__question_title}>{question}</h1>
      <div className={styles.quiz__options} data-testid="options-list">
        {renderOptions()}
      </div>
    </div>
  );
};

export default Question;

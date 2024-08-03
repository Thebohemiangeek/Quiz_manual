import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quiz from "app/landing-page/components/Quiz/Quiz"; // Adjust the import path as needed

const questionsMock = [
  {
    question: "What is your favorite color?",
    type: "single-choice",
    options: [
      { display: "Red", value: "red", isRejection: false },
      { display: "Blue", value: "blue", isRejection: false },
      { display: "Green", value: "green", isRejection: false },
    ],
  },
  {
    question: "What is your favorite animal?",
    type: "single-choice",
    options: [
      { display: "Cat", value: "cat", isRejection: false },
      { display: "Dog", value: "dog", isRejection: false },
      { display: "Bird", value: "bird", isRejection: false },
    ],
  },
];

describe("Quiz Component", () => {
  test("renders the first question and options", () => {
    const { container } = render(<Quiz questions={questionsMock} />);

    expect(container.querySelector(".quiz__label")).toHaveTextContent(
      "Question 1"
    );
    expect(container.querySelector(".quiz__question_title")).toHaveTextContent(
      "What is your favorite color?"
    );

    // Check if the options are displayed
    expect(container.querySelectorAll('[data-testid="option"]')).toHaveLength(
      3
    );
    expect(screen.getByText("Red")).toBeInTheDocument();
    expect(screen.getByText("Blue")).toBeInTheDocument();
    expect(screen.getByText("Green")).toBeInTheDocument();
  });

  test("handles option selection and navigation", () => {
    render(<Quiz questions={questionsMock} />);

    // Select an option for the first question
    fireEvent.click(screen.getByText("Red"));

    // Click next to go to the second question
    fireEvent.click(screen.getByTestId("next-button"));

    // Check if the second question is displayed
    expect(screen.getByTestId("question")).toHaveTextContent("Question 2");
    expect(screen.getByTestId("question")).toHaveTextContent(
      "What is your favorite animal?"
    );

    // Check if the options are displayed
    expect(screen.getByText("Cat")).toBeInTheDocument();
    expect(screen.getByText("Dog")).toBeInTheDocument();
    expect(screen.getByText("Bird")).toBeInTheDocument();
  });

  test("handles previous question navigation", () => {
    render(<Quiz questions={questionsMock} />);

    // Select an option for the first question
    fireEvent.click(screen.getByText("Red"));

    // Click next to go to the second question
    fireEvent.click(screen.getByTestId("next-button"));

    // Click previous to go back to the first question
    fireEvent.click(screen.getByTestId("previous-button"));

    // Check if the first question is displayed again
    expect(screen.getByTestId("question")).toHaveTextContent("Question 1");
    expect(screen.getByTestId("question")).toHaveTextContent(
      "What is your favorite color?"
    );
  });

  test("displays the correct completion message", () => {
    render(<Quiz questions={questionsMock} />);

    // Select an option for the first question
    fireEvent.click(screen.getByText("Red"));

    // Click next to go to the second question
    fireEvent.click(screen.getByTestId("next-button"));

    // Select an option for the second question
    fireEvent.click(screen.getByText("Cat"));

    // Click submit to complete the quiz
    fireEvent.click(screen.getByTestId("submit-button"));

    // Check if the completion message is displayed
    expect(screen.getByTestId("approval-message")).toHaveTextContent(
      "Great news! We have the perfect treatment for your hair loss."
    );
  });

  test("displays the rejection message if any rejection option is selected", () => {
    const rejectionQuestionsMock = [
      {
        question: "Do you have any allergies?",
        type: "single-choice",
        options: [
          { display: "Yes", value: true, isRejection: true },
          { display: "No", value: false, isRejection: false },
        ],
      },
    ];

    render(<Quiz questions={rejectionQuestionsMock} />);

    // Select the rejection option for the first question
    fireEvent.click(screen.getByText("Yes"));

    // Click submit to complete the quiz
    fireEvent.click(screen.getByTestId("submit-button"));

    // Check if the rejection message is displayed
    expect(screen.getByTestId("rejection-message")).toHaveTextContent(
      "Unfortunately, we are unable to prescribe this medication for you."
    );
  });
});

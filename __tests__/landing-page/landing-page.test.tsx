/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "app/landing-page/page";

const mockQuizData = {
  questions: [
    {
      question: "Which image best matches your hair loss?",
      type: "ChoiceType",
      options: [
        { display: "Temples", value: "Temples", isRejection: false },
        { display: "Patchy", value: "Patchy", isRejection: true },
      ],
    },
    {
      question: "Have you ever been diagnosed with prostate cancer?",
      type: "ChoiceType",
      options: [
        { display: "Yes", value: true, isRejection: true },
        { display: "No", value: false, isRejection: false },
      ],
    },
  ],
};

describe("Landing Page", () => {
  it("renders the Hero component with the correct heading", () => {
    render(<LandingPage quizData={mockQuizData} />);

    const heading = screen.getByText(/Be good/i);
    expect(heading).toBeInTheDocument();
  });

  it("opens the quiz modal when the button is clicked", () => {
    render(<LandingPage quizData={mockQuizData} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const modalQuestion = screen.getByText(
      "Which image best matches your hair loss?"
    );
    expect(modalQuestion).toBeInTheDocument();
  });

  it("closes the quiz modal when the close button is clicked", () => {
    render(<LandingPage quizData={mockQuizData} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const close__button = screen.getByText("×");
    fireEvent.click(close__button);

    const modalQuestion = screen.queryByText(
      "Which image best matches your hair loss?"
    );
    expect(modalQuestion).not.toBeInTheDocument();
  });
});

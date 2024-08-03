import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Question from "app/landing-page/components/Quiz/Question"; // Adjust the import path as needed

const mockHandleSetResponse = jest.fn();

const mockQuestionData = {
  question: "What is your favorite color?",
  type: "single-choice",
  options: [
    { display: "Red", value: "red", isRejection: false },
    { display: "Blue", value: "blue", isRejection: false },
    { display: "Green", value: "green", isRejection: false },
  ],
};

describe("Question Component", () => {
  test("renders correctly when active", () => {
    render(
      <Question
        data={mockQuestionData}
        number={1}
        activeQuestion={1}
        userResponses={{}}
        handleSetResponse={mockHandleSetResponse}
      />
    );

    expect(screen.getByTestId("question")).toBeInTheDocument();
    expect(screen.getByText("Question 1")).toBeInTheDocument();
    expect(
      screen.getByText("What is your favorite color?")
    ).toBeInTheDocument();
  });

  test("renders options correctly", () => {
    render(
      <Question
        data={mockQuestionData}
        number={1}
        activeQuestion={1}
        userResponses={{}}
        handleSetResponse={mockHandleSetResponse}
      />
    );

    const options = screen.getAllByTestId("option");
    expect(options).toHaveLength(3);
    expect(screen.getByText("Red")).toBeInTheDocument();
    expect(screen.getByText("Blue")).toBeInTheDocument();
    expect(screen.getByText("Green")).toBeInTheDocument();
  });

  test("calls handleSetResponse with correct arguments when option is clicked", () => {
    render(
      <Question
        data={mockQuestionData}
        number={1}
        activeQuestion={1}
        userResponses={{}}
        handleSetResponse={mockHandleSetResponse}
      />
    );

    fireEvent.click(screen.getByText("Red"));
    expect(mockHandleSetResponse).toHaveBeenCalledWith(
      "What is your favorite color?",
      "red",
      1
    );

    fireEvent.click(screen.getByText("Blue"));
    expect(mockHandleSetResponse).toHaveBeenCalledWith(
      "What is your favorite color?",
      "blue",
      1
    );
  });

  test("does not render when not active", () => {
    render(
      <Question
        data={mockQuestionData}
        number={1}
        activeQuestion={2}
        userResponses={{}}
        handleSetResponse={mockHandleSetResponse}
      />
    );

    expect(screen.queryByTestId("question")).toBeNull();
  });
});

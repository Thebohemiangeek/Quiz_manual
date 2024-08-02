import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "app/landing-page/components/Hero/Hero";

describe("Hero Component", () => {
  test("renders the hero section with correct content", () => {
    render(<Hero setShowQuizModal={() => {}} />);

    expect(screen.getByAltText("Manual.co")).toBeInTheDocument();
    expect(screen.getByText("Be good to yourself")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Take the Quiz")).toBeInTheDocument();
  });

  test("calls setShowQuizModal when 'Take the Quiz' button is clicked", () => {
    const setShowQuizModalMock = jest.fn();
    render(<Hero setShowQuizModal={setShowQuizModalMock} />);

    fireEvent.click(screen.getByText("Take the Quiz"));
    expect(setShowQuizModalMock).toHaveBeenCalledWith(true);
  });
});

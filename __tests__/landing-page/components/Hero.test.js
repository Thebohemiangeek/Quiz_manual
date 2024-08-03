import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "app/landing-page/components/Hero/Hero";

describe("Hero Component", () => {
  const setShowQuizModal = jest.fn();

  it("renders the hero section", () => {
    render(<Hero setShowQuizModal={setShowQuizModal} />);

    // Check if the hero section is rendered
    const logoElement = screen.getByAltText("Manual.co");
    expect(logoElement).toBeInTheDocument();

    // Check if the title is rendered
    const titleElement = screen.getByText(/Be good/i);
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText(
      "We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
    );
    expect(descriptionElement).toBeInTheDocument();

    // Check if the button is rendered
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls setShowQuizModal when the button is clicked", () => {
    render(<Hero setShowQuizModal={setShowQuizModal} />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(setShowQuizModal).toHaveBeenCalledTimes(1);
    expect(setShowQuizModal).toHaveBeenCalledWith(true);
  });
});

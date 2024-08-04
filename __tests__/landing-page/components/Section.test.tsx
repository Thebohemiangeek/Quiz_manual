import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Section from "app/landing-page/components/Section/Section";
import data from "public/data/section.json";
import Hairloss from "public/img/hairlossman.png";
import erectiledisfunction from "public/img/erectiledisfunction.png";

/// Mock the Image component from next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

// Mock the image imports
jest.mock("public/img/hairlossman.png", () => "hairlossman.png");
jest.mock(
  "public/img/erectiledisfunction.png",
  () => "erectiledisfunction.png"
);

describe("Section Component", () => {
  test("renders the section with correct data for hairLoss", () => {
    render(<Section identifier="hairLoss" />);

    const section = screen.getByTestId("section-content");
    const image = screen.getByAltText(data.hairLoss.imageDescription);
    const title = screen.getByText(data.hairLoss.title);
    const topic = screen.getByText(data.hairLoss.topic);
    const text = screen.getByText(data.hairLoss.text);

    expect(section).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(topic).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test("renders the section with correct data for erectileDysfunction", () => {
    render(<Section identifier="erectileDysfunction" />);

    const section = screen.getByTestId("section-content");
    const image = screen.getByAltText(
      data.erectileDysfunction.imageDescription
    );
    const title = screen.getByText(data.erectileDysfunction.title);
    const topic = screen.getByText(data.erectileDysfunction.topic);
    const text = screen.getByText(data.erectileDysfunction.text);

    expect(section).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "erectiledisfunction.png");
    expect(title).toBeInTheDocument();
    expect(topic).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test("renders the section in reversed mode", () => {
    render(<Section identifier="hairLoss" reversed />);

    const section = screen.getByTestId("section-content");
    expect(section).toHaveClass("section--reversed");
  });

  test("renders invalid section identifier message", () => {
    render(<Section identifier="invalidIdentifier" />);

    const errorMessage = screen.getByText("Invalid section identifier");
    expect(errorMessage).toBeInTheDocument();
  });
});

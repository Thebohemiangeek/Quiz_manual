/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import LandingPage from "app/landing-page/page";

describe("Landing Page", () => {
  it("renders a heading", () => {
    render(<LandingPage />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

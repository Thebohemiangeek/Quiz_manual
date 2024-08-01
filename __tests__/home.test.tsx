/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the landing page content", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText("This is the landing page.");
    expect(paragraph).toBeInTheDocument();
  });
});

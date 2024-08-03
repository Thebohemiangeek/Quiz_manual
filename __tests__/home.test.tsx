import React from "react";
import Home from "../app/page";
import { promises as fs } from "fs";
import { render } from "@testing-library/react";
import LandingPage from "../app/landing-page/page";
import { mocked } from "jest-mock";

jest.mock("fs", () => ({
  promises: {
    readFile: jest.fn(),
  },
}));

jest.mock("path", () => ({
  ...jest.requireActual("path"),
  resolve: jest.fn().mockReturnValue("/public/data/quiz.json"),
}));

jest.mock("../app/landing-page/page", () =>
  jest.fn(() => <div>LandingPage Mock</div>)
);

describe("Home component", () => {
  it("renders LandingPage with quiz data", async () => {
    const mockQuizData = { quiz: "test data" };
    const mockReadFile = mocked(fs.readFile);
    mockReadFile.mockResolvedValue(JSON.stringify(mockQuizData));
    /* @ts-expect-error Server Component */
    const { findByText } = render(<Home />);
    //test error due to react testing library
    expect(await findByText("LandingPage Mock")).toBeInTheDocument();
    expect(LandingPage).toHaveBeenCalledWith({ quizData: mockQuizData }, {});
  });
});

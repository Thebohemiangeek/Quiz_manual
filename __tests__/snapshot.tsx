/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import LandingPage from "app/landing-page/page";
import { Suspense } from "react";

const mockQuizData = {
  questions: [
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
  ],
};

interface LandingPageProps {
  quizData: typeof mockQuizData;
}

it("renders LandingPage unchanged", () => {
  const { container } = render(
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPage quizData={mockQuizData} />
    </Suspense>
  );
  expect(container).toMatchSnapshot();
});

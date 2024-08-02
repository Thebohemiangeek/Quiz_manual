import LandingPage from "./landing-page/page";
import "../styles/global.css";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/public/data/quiz.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return <LandingPage quizData={data} />;
}

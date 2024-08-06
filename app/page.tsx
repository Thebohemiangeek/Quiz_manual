import LandingPage from "./landing-page/page";
import "../styles/global.css";

async function getData() {
  // Fetch data from the external API endpoint
  const res = await fetch(
    "https://manual-case-study.herokuapp.com/questionnaires/6-part.json",
    { cache: "force-cache" }
  );

  // Handle any errors
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // Parse and return the JSON data
  return res.json();
}

export default async function Home() {
  // Uncomment the following line to fetch data from the external API endpoint
  const data = await getData();

  // Comment out the following lines when fetching data from the external API endpoint
  // const file = await fs.readFile(
  //   process.cwd() + "/public/data/quiz.json",
  //   "utf8"
  // );
  // const data = JSON.parse(file);

  return <LandingPage quizData={data} />;
}

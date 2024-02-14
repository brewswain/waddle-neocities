import { redirect } from "next/navigation";

const AboutPage = () => {
  redirect("/construction");
  return <main>About</main>;
};

export default AboutPage;

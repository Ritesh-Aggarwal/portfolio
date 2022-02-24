import { GetStaticProps } from "next";
import Intro from "../components/Intro/Intro"
import Navbar from './../components/Navbar/Navbar';
export default function Home() {
  return (
    <div className="">
        <Intro/>
    </div>
  )
}

export async function getStaticProps() {

    return {
      props: {
        active: "INTRO",
      },
    };
}

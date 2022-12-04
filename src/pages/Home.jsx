import { Routes, Route, A } from "@solidjs/router";

import BigButton from "../components/BigButton";
import Nav from "../components/Nav";

function Home() {
  return (
    <div className="flex justify-center items-center flex-col font-comfortaa">
      <div className="flex flex-col items-center justify-center bg-[#D6EADF] h-screen w-96 px-10">
        <img
          src="../src/assets/SmallLogo.svg"
          alt="small logo"
          className="-mt-16"
        />

        <h1 className="flex text-[#5F7BB1] text-4xl text-center my-8">
          Personal Woosh
        </h1>
        <p className="flex justify-center text-[#5F7BB1] text-lg text-center">
          Woosh is an app designed to teach people about basic personal hygiene.
        </p>
        <p className="flex justfy-center text-[#5F7BB1] text-lg text-center mb-16">
          You may take the quiz and see where your knowledge is on this topic.
        </p>
        <A href="/quizcategory">
          <BigButton />
        </A>
        <A href="/instruction">
          <p className="text-[#5F7BB1] mt-6 underline text-lg">
            or watch the instruction
          </p>
        </A>
      </div>
    </div>
  );
}

export default Home;

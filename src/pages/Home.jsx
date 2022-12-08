import { Routes, Route } from "@solidjs/router";

import BigButton from "../components/BigButton";

function Home() {
  return (
    <div class="flex justify-center items-center flex-col font-comfortaa">
      <div class="flex flex-col items-center justify-center bg-green-100 h-screen w-96 px-10">
        <img
          src="../src/assets/SmallLogo.svg"
          alt="small logo"
          class="-mt-16"
        />

        <h1 class="flex text-slate-500 text-4xl text-center my-8">
          Personal Woosh
        </h1>
        <p class="flex justify-center text-slate-500 text-lg text-center ">
          Woosh is an app designed to teach people about basic personal hygiene.
        </p>
        <p class="flex justfy-center text-slate-500 text-lg text-center mb-16">
          You may take the quiz and see where your knowledge is on this topic.
        </p>

        <BigButton />

        <p class="text-slate-500 mt-6 underline text-lg">
          or watch the instruction
        </p>
      </div>
    </div>
  );
}

export default Home;

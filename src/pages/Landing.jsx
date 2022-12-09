import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import Button from "../components/Button";
import Nav from "../components/Nav";

export default function Landing() {
  // const [num, setNum] = createSignal(0);
  return (
    // <div className="flex justify-center items-center flex-col bg-blue-300">
      <div
        class="flex flex-col items-center justify-center bg-[#9FC0FF] h-screen w-screen headingFont"
      >
        <img
          src="../wooshLogo.png"
          alt="logo"
          class="mt-12"
        />

        <h1 class="flex text-[#5F7BB1] text-4xl text-center my-8">
          Welcome to Woosh
        </h1>
        <p class="flex justify-center text-[#5F7BB1] text-2xl text-center px-8">
          We are very happy to help you learn about personal hygiene.
        </p>
        <p class="flex justfy-center text-[#5F7BB1] text-2xl text-center mb-16">
          Enjoy Woosh!
        </p>
        <A href="/home">
          <Button />
        </A>
        <img
          src="../horizontal_Logo.png"
          alt="logo"
          class="mt-16"
        />
      </div>
    // </div>
  );
}

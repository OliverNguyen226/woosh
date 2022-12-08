import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import Button from "../components/Button";
import Nav from "../components/Nav";

export default function Landing() {
  // const [num, setNum] = createSignal(0);
  return (
    <div class="flex justify-center items-center flex-col">
      {/* <h1> Big {num()}</h1> */}
      <div class="flex flex-col items-center justify-center bg-blue-300 h-screen w-96 px-10">
        <img src="../src/assets/VerticalLogo.svg" alt="logo" class="mt-12" />

        <h1 class="flex text-slate-500 text-4xl text-center my-8">
          Welcome to Woosh
        </h1>
        <p class="flex justify-center text-slate-500 text-2xl text-center ">
          We are very happy to help you learn about personal hyegiene.
        </p>
        <p class="flex justfy-center text-slate-500 text-2xl text-center mb-16">
          Enjoy Woosh!
        </p>
        <A href="/home">
          <Button />
        </A>
        <img src="../src/assets/Horizontal_Logo.svg" alt="logo" class="mt-16" />
      </div>
      <Nav />
    </div>
  );
}

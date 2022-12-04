import Button from "../components/Button";
import {A} from '@solidjs/router'

export default function Landing() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col items-center justify-center bg-blue-300 h-screen w-96 px-10">
        <img
          src="../src/assets/VerticalLogo.svg"
          alt="logo"
          className="mt-12"
        />

        <h1 className="flex text-slate-500 text-4xl text-center my-8">
          Welcome to Woosh
        </h1>
        <p className="flex justify-center text-slate-500 text-2xl text-center ">
          We are very happy to help you learn about personal hyegiene.
        </p>
        <p className="flex justfy-center text-slate-500 text-2xl text-center mb-16">
          Enjoy Woosh!
        </p>
        <A href="/home">
        <Button />
        </A>
        <img
          src="../src/assets/Horizontal_Logo.svg"
          alt="logo"
          className="mt-16"
        />
      </div>
    </div>
  );
}

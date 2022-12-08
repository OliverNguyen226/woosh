import Nav from "../components/Nav";

const Resource = () => {
  return (
    <div class="bg-[#D6EADF] w-screen h-screen flex m-auto items-center  flex-col">
      <div class="flex items-center h-28">
        <img src="/wooshLogo.png" class="mt-10 mb-6 w-24 h-24 mr-10" />
        <h1 class="text-[#5F7BB1] text-4xl font-semibold">Resource</h1>
      </div>

      <div class="bg-[#9FC0FF] text-2xl h-20 w-full flex pl-10 items-center">
        News about hygiene
      </div>

      <div class="bg-[#F1F7FF] w-screen">
        <ul class="items-center m-auto grid">
          <li class=" grid grid-flow-col gap-1">
            <img
              src="/hygiene-products.png"
              class="border-2 border-black w-24 h-20 ml-8 my-4 col-span-1"
            />
            <p class="pl-8 pr-4 col-span-4 items-center flex text-xl text-left">
              UN-backed fund to address crisis in global sanitation and hygiene
            </p>
          </li>
          <hr class=" h-px bg-gray-200 border-0 dark:bg-gray-700 flex justify-center m-auto w-11/12"></hr>

          <li class=" grid grid-flow-col gap-1">
            <img
              src="/poorHygiene.png"
              class="border-2 border-black w-24 h-20 ml-8 my-4 col-span-1"
            />
            <p class="pl-8 pr-4 col-span-4 items-center flex text-xl text-left">
              Poor sanitation, hygiene at work kills 400,000 workers globally
            </p>
          </li>
          <hr class=" h-px bg-gray-200 border-0 dark:bg-gray-700 flex justify-center m-auto w-11/12"></hr>

          <li class=" grid grid-flow-col gap-1">
            <img
              src="/workHygiene.png"
              class="border-2 border-black w-24 h-20 ml-8 my-4 col-span-1"
            />
            <p class="pl-8 pr-4 col-span-4 items-center flex text-xl text-left">
              Simple handwashing crucial to halting diarrhoeal and water-borne
              diseases
            </p>
          </li>
        </ul>
      </div>

      <div class="bg-[#9FC0FF] text-2xl h-20 w-full flex pl-10 items-center">
        Useful resources
      </div>

      <div class="bg-[#F1F7FF] w-screen">
        <ul class="items-center m-auto grid">
          <li class=" grid grid-flow-col gap-1">
            <img
              src="/hygiene-products.png"
              class="border-2 border-black w-24 h-20 ml-8 my-4 col-span-1"
            />
            <p class=" pr-4 col-span-4 items-center flex text-xl text-left">
              CDC - How to Protect Yourself and Others
            </p>
          </li>
          <hr class=" h-px bg-gray-200 border-0 dark:bg-gray-700 flex justify-center m-auto w-11/12"></hr>

          <li class=" grid grid-flow-col gap-1">
            <img
              src="/poorHygiene.png"
              class="border-2 border-black w-24 h-20 ml-8 my-4 col-span-1"
            />
            <p class=" pr-4 col-span-4 items-center flex text-xl text-left">
              How to Keep Your Breast Pump Kit Clean
            </p>
          </li>
          <hr class=" h-px bg-gray-200 border-0 dark:bg-gray-700 flex justify-center m-auto w-11/12"></hr>

          <li class=" grid grid-flow-col gap-1">
            <img
              src="/workHygiene.png"
              class="border-2 border-black w-24 h-20 ml-8 my-4 col-span-1"
            />
            <p class=" pr-4 col-span-4 items-center flex text-xl text-left">
              Protect Your Baby from Cronobacter
            </p>
          </li>
        </ul>
      </div>

      {/* <Nav /> */}
    </div>
  );
};

export default Resource;

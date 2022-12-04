import Nav from '../components/Nav'


const QuizCategory = () => {
    return (


        <div class="bg-[#D6EADF] w-screen h-screen flex m-auto items-center  flex-col">

            <img src="/wooshLogo.png" class="mt-10 mb-6 w-28 h-28" />
            <p class="text-[#5F7BB1] text-3xl font-semibold p-2	">Pick a quiz!</p>
            <p class="text-[#5F7BB1] text-3xl font-semibold	p-2">And Challenge yourself!</p>
            <div class='grid grid-cols-2 gap-16 mt-20'>

                <div class="text-[#5383DF] text-3xl font-light bg-white h-40 w-40 flex m-auto items-center justify-center text-center rounded-2xl shadow-xl ">
                    Hair<br /> Woosh
                </div>
                <div class="text-[#5383DF] text-3xl font-light bg-white h-40 w-40 flex m-auto items-center justify-center text-center rounded-2xl shadow-xl ">
                    Oral<br /> Woosh
                </div>
                <div class="text-[#5383DF] text-3xl font-light bg-white h-40 w-40 flex m-auto items-center justify-center text-center rounded-2xl shadow-xl ">
                    Hand<br /> Woosh
                </div>
                <div class="text-[#5383DF] text-3xl font-light bg-white h-40 w-40 flex m-auto items-center justify-center text-center rounded-2xl shadow-xl ">
                    Foot<br /> Woosh
                </div>
            </div>
            <Nav />


        </div>

    )
}

export default QuizCategory;
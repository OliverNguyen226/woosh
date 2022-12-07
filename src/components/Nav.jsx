

const Nav = () => {
    return (
        
        <div class='flex bg-[#9FC0FF] w-screen h-34 absolute bottom-0 justify-between p-2'>

            <div class='flex flex-col m-auto justify-center items-center'>
                <div class="text-[#5383DF] text-3xl font-light bg-white h-24 w-24 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                    <img src="/home.png" class="h-16 w-16 " />
                </div>
                <p>Home</p>
            </div>


            <div class='flex flex-col m-auto justify-center items-center'>
                <div class="text-[#5383DF] text-3xl font-light bg-white h-24 w-24 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                    <img src="/quiz.png" class=" w-16 h-16 " />
                </div>
                <p>Quiz</p>
            </div>

            <div class='flex flex-col m-auto justify-center items-center'>
                <div class="text-[#5383DF] text-3xl font-light bg-white h-24 w-24 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                    <img src="/instruction.png" class=" w-16 h-16" />
                </div>
                <p>Instruction</p>
            </div>

            <div class='flex flex-col m-auto justify-center items-center'>
                <div class="text-[#5383DF] text-3xl font-light bg-white h-24 w-24 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                    <img src="/resource.png" class=" w-16 h-16" />
                </div>
                <p>Resource</p>
            </div>

        </div>
    )
}

export default Nav;
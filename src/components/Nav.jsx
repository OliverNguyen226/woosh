import { A } from '@solidjs/router';

const Nav = () => {
    return (

        <div className='flex bg-[#9FC0FF] w-screen h-24 absolute bottom-0 justify-between p-2'>

            <div className='flex flex-col m-auto justify-center items-center'>
                <div className="text-[#5383DF] text-3xl font-light bg-white h-24 w-24 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                    <img src="/home.png" className="h-16 w-16 " />
                </div>
                <p>
                    Home
                </p>

            </div>


            <div className='flex flex-col m-auto justify-center items-center'>
                <div className="text-[#5383DF] text-3xl font-light bg-white h-24 w-24 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                    <img src="/quiz.png" className=" w-16 h-16 " />
                </div>
                <p>Quiz</p>
            </div>

            <div className='flex flex-col m-auto justify-center items-center'>
                <div className="text-[#5383DF] text-3xl font-light bg-white h-24 w-24 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                    <img src="/instruction.png" className=" w-16 h-16" />
                </div>
                <p>Instruction</p>
            </div>

            <div className='flex flex-col m-auto justify-center items-center'>
                <div className="text-[#5383DF] text-3xl font-light bg-white h-24 w-24 flex m-auto items-center justify-center text-center rounded-full  border-4 border-[#7D98F9]">
                    <img src="/resource.png" className=" w-16 h-16" />
                </div>
                <p>Resource</p>
            </div>

        </div >
    )
}

export default Nav;
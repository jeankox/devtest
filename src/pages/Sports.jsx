
import Sportsimg from '../assets/sports/Sports.png'
const Sports = () => {
    return (
        <>
            <div className=" mx-4 flex flex-col text-gray-700 ">
                <p class="text-5xl font-semibold mt-4 " >Culture specifics</p>
                <p className="mt-2 text-lg">In this category you will be able to win 46 points.  You will be able to check it in the avatar of the left menú.</p>
                <div className="my-10 rounded-lg bg-gray-200 p-8">
                    <div class=" flex flex-row  gap-y-4 mb-8 text-lg" >
                        <p className='text-gray-400 '>Home</p>
                        <span className='mx-3'>|</span>
                        <p className='text-orange-500 ml-2'> Sports <a class="font-semibold">(6 puntos)</a></p>
                    </div>
                    <p class="text-gray-600 text-3xl font-bold mb-6">Sports</p>
                    <img src={Sportsimg} class=" w-full"  alt="" />
                    </div>
            </div>
        </>
    )
}
export default Sports
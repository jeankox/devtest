import bannerwelcome from '../assets/home/Bannerwelcome.png'
import Bg1 from '../assets/home/bg1.png'

const Home = () => {
    return  (
        <div class="flex flex-col   bg-gray-100">
            <p class="mt-10 text-left text-4xl font-semibold mb-4 text-gray-800 ">Cultural Immersion Program Integration ​</p>
            <img src={bannerwelcome} alt="" />
            <div class="flex flex-row m-4">
                <div class="text-gray-700 m-4 w-2/3 pr-14  pt-10 space-y-4">
                    <p class="text-3xl text-gray-700 font-bold mb-6 ">Welcome to Masimo Stork’s cultural immersion platform! </p>
                    <p>During your journey on this platform you will be able to acquire cultural knowledge of the regions of the USA, which will help you to have better interactions with customers. 
                        You will also learn about Optimum and basic concepts of its products, processes and customers.</p>
                    <p>The platform has <a class="font-bold ">3 main categories,</a> culture immersion, customer specifications, industry specifications, which you will find in the side menu of all screens. </p>
                    <p>Each one of <a class="font-bold ">these categories has a score,</a> you must reach the final score 
                    <a class="font-bold ">of 100 </a>, when you finish visiting all the categories in the menu. Additionally, if you manage to complete certain challenges, you can <a class="font-bold "> earn performance medals. </a></p>
                    <p className='font-bold'>Good luck! you can hit next to start</p>
                </div>
                <img src={Bg1} class=" w-1/4"  alt="" />
            </div>
            
            
        </div>
    )
}
export default Home

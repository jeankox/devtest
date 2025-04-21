import { useState } from 'react';
import a1 from '../../assets/navigation/a1.png'
import a2 from '../../assets/navigation/a2.png'
import a3 from '../../assets/navigation/a3.png'
import a4 from '../../assets/navigation/a4.png'
import a5 from '../../assets/navigation/a5.png'
import a6 from '../../assets/navigation/a6.png'
import v1 from '../../assets/navigation/vector.png'
import v2 from '../../assets/navigation/vector1.png'

export default function MenuButton()
{
    const [showMore, setShowMore] = useState(false);

    const Categories= [{logo:a1, name:"Geography"}, {logo:a2, name:"Holidays"},
                      {logo:a3, name:"Sports"},   {logo:a4, name:"Cuisine"}, 
                      {logo:a5, name:"Language"}, {logo:a6, name: "Currency"}]

    return(
      <div>
        <button onClick={() => setShowMore(!showMore)} 
          class={`w-full py-1 text-sm sm:text-base md:text-lg lg:text-xl border border-orange-600 ${showMore ? " text-orange-500 bg-black" : "bg-gray-900 text-white" }`}>
          {showMore ? <div class="flex justify-between items-center px-4 py-3"><p>Culture specifics</p><img class="w-6 h-3" src={v2}/> </div>: <div class="flex justify-between px-4 py-3 items-center"><p>Culture specifics</p><img class=" w-3 h-6" src={v1}/></div>}
        </button>
        {showMore && (
          <div class=" bg-zinc-800">
            <ul class=" text-sm sm:text-base md:text-lg lg:text-xl text-white flex flex-col ">
              {Categories.map((Categories, index) => (
                <li class="border border-white px-4 py-5 text-white hover:bg-orange-600 font-extrabold transition-colors duration-300 group" key={index}>
                  <div class="flex items-center justify-between"> 
                    <div class="flex space-x-4 gap-2 "><img class="mr-2 " src={Categories.logo}/>{Categories.name} </div>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1"> ❯ </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    )
}
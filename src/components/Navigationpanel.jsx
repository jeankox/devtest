import profilelogo from '../assets/navigation/profile.png'
import MenuButton from './navigation/Button'


const Navigationpanel = () => {
  return (
    <div class="w-1/5 bg-black  " > {/* main estructure */}
    
          <div class="text-5xl p-5 m-5 mt-20" >   
              <img src={profilelogo}></img>{/* profile and advance button */ }
              {/* categories button goes here */}
          </div>
          <div class="m-5"> {/* navigation buttons*/}
            <MenuButton/>

          </div>
    
    </div>
  )
}

export default Navigationpanel

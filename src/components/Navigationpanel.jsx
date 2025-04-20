import profilelogo from '../assets/profile.png'

const Navigationpanel = () => {
  return (
    <div class="w-1/5 bg-black  " > {/* main estructure */}
    
          <div class="text-5xl p-5 m-5" >   
              <img src={profilelogo}></img>{/* profile and advance button */ }

          </div>

    
    </div>
  )
}

export default Navigationpanel

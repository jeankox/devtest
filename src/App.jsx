import { useState } from 'react'
import Navigationpanel from './components/Navigationpanel'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import MenuButton from './components/navigation/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex flex-row w-screen h-screen bg-amber-50" >     
          <Navigationpanel class="w-1/4"/>
          <div class="w-full bg-red-50">
            <h3 class="text-black">zona secundaria</h3>
          </div>
      </div>
    </>
  )
}

export default App

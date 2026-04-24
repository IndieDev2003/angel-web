import { useState } from 'react'
import Home from './pages/Home'


function App() {
  const [show,setShow]= useState(false);
  
  const onClickHandler =()=>{
    // e.preventDeafult();
    setShow(!show)
    console.log(show)
  }

  return (
    <div>
      <div className={`h-screen w-screen flex items-center justify-center bg-pink-100 ${!show?'block':'hidden'}`}>
        <div className="w-120 h-98 border-2 border-fuchsia-300 bg-pink-300 rounded-lg p-4 flex flex-col items- justify-center">
          <h2 className="text-6xl">Hi, Angel</h2>
          <p className="text-2xl">This is for an Angel That i met online</p>
          <p>
            just a site from my side for all those greatg momments, i do typo's
            alot so ignore them
          </p>
          <div>
            <button onClick={onClickHandler} className="px-4 py-2 border rounded bg-amber-200">
              Enter the Website
            </button>
          </div>
        </div>
      </div>

      <div className={`${!show?'hidden':'block'}`}>
        <Home/>
      </div>
    </div>
  );
}

export default App
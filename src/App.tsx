// import { useEffect, useState } from "react";
// import Home from "./pages/Home";
// import mob_img from './assets/front_mob.jpg'
// import desk_img from './assets/front_desk.jpg'
// import { useEffect, useState } from "react";
import Weather from "./pages/Weather";
// import { useGeolocation } from "./utils/useGeolocation";
// import WeatherComp from "./components/WeatherComp";

// function App() {
//   const [show, setShow] = useState(false);

//   const onClickHandler = () => {
//     setShow(!show);
//     enterFullscreen()
//   };

//   const enterFullscreen = () => {
//     const el = document.documentElement;

//     if (el.requestFullscreen) {
//       el.requestFullscreen();
//     } else if (el.requestFullscreen) {
//       el.requestFullscreen();
//     } else if (el.requestFullscreen) {
//       el.requestFullscreen();
//     }
//   };

//   useEffect(() => {
    
//   }, []);

//   // return (
//   //   <div>
//   //     <div
//   //       className={`h-screen w-screen flex px-2 items-center relative justify-center bg-pink-100 ${!show ? "block" : "hidden"}`}
//   //     >
//   //       <img src={desk_img} alt="" className="hidden md:block absolute z-10 h-screen w-screen object-cover" />
//   //       <img src={mob_img} alt="" className="md:hidden absolute z-10 h-full w-full object-cover" />
//   //       <div className="h-98 w-98 gap-3 z-20 md:w-120 md:h-98 border-2 border-fuchsia-300 bg-pink-300/20 text-white backdrop-blur-2xl rounded-lg p-4 flex flex-col items- justify-center">
//   //         <h2 className="text-6xl">Hi, Angel</h2>
//   //         <p className="text-2xl">This is for an Angel That i met online</p>
//   //         <p>
//   //           just a site from my side for all those greatg momments, i do typo's
//   //           alot so ignore them
//   //         </p>
//   //         <div>
//   //           <button
//   //             onClick={onClickHandler}
//   //             className="px-4 py-2 border text-black rounded bg-amber-200"
//   //           >
//   //             Enter the Website
//   //           </button>
//   //         </div>
//   //       </div>
//   //     </div>

//   //     <div className={`${!show ? "hidden" : "block"}`}>
//   //       <Home />
//   //     </div>
//   //   </div>
//   // );
//   return(
//     <div>
//       <Weather/>
//     </div>
//   )
// }



function App() {

  
  return (
    <div>
      <Weather />
      
    </div>
  );
}

export default App
import Home from "./pages/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Weather from "./pages/Weather";
import MessageBox from "./components/MessageBox";

export default function App() {
  const url = useLocation()
 

  return (
    <div>

      <Routes>
        <Route path="/" element={<MessageBox />} />
        <Route path="/message" element={<Home/>}/>
        <Route path="/weather" element={<Weather />} />
      </Routes>

     {
      url.pathname!=='/' ?  <div className="fixed right-4 top-4 border border-white/20 flex gap-2 items-center p-1 backdrop-blur-3xl justify-center bg-red-  z-100 rounded-full">
        <Link className="size-10 text-center bg-red-400/50 backdrop-blur-3xl text-white p-1.5 rounded-full" to={'/'}>H</Link>
        <Link className="size-10 text-center bg-fuchsia-400/50 backdrop-blur-3xl text-white p-1.5 rounded-full" to={'/weather'}>W</Link>
        <Link className="size-10 text-center bg-amber-400/50 backdrop-blur-3xl text-white p-1.5 rounded-full" to={'/message'}>M</Link>
      </div>: <></>
     }
    </div>
  );
}


 
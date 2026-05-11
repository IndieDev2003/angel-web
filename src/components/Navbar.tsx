import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex flex-row w-screen bg-amber-200//20 text-white border-t-2 border-white/40   backdrop-blur justify-around fixed z-2000 bottom-0">
        <NavLink className={`size-20 text-lg flex items-center justify-center  text-center`} to={'/'}>Home</NavLink>
        <NavLink className={`size-20 text-lg flex items-center justify-center  text-center`} to={'/notes'}>Notes</NavLink>
        <NavLink className={`size-20 text-lg flex items-center justify-center  text-center`} to={'/weather'}>Weather</NavLink>
        <NavLink className={`size-20 text-lg flex items-center justify-center  text-center`} to={'/user'}>User</NavLink>
    </nav>
  )
}

export default Navbar
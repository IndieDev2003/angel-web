// import Home from "./pages/Home";
// import { Link, Route, Routes, useLocation } from "react-router-dom";
// import Weather from "./pages/Weather";
// import MessageBox from "./components/MessageBox";
import { useAuth } from "@clerk/react";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import User from "./pages/User";
import Notes from "./pages/Notes";

export default function App() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded)
    return (
      <div className="h-screen w-screen flex items-center justify-center text-3xl">
        <p>Loading Auth.....</p>
      </div>
    );

  if (!isSignedIn) return <Auth />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Navbar />
    </>
  );
}

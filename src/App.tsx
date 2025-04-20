import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import Youtube from "./pages/Youtube"
import JobSearch from "./pages/JobSearch"
import VideoCall from "./pages/VideoCall"
import Mentor from "./pages/Mentor"
import Navbar from "./pages/Navbar"
import Profile from "./pages/Profile"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element=<LandingPage/> />
      <Route path="/home" element=<Home/> />
      <Route path="/yt" element=<Youtube/> />
      <Route path="/jobs" element=<JobSearch/> />
      <Route path="/video" element=<VideoCall/> />
      <Route path="/mentors" element=<Mentor/> />
      <Route path="/profile" element=<Profile/> />
    </Routes>
    </>
  )
}

export default App

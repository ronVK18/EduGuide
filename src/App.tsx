import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import Youtube from "./pages/Youtube"
import JobSearch from "./pages/JobSearch"
import VideoCall from "./pages/VideoCall"
import Mentor from "./pages/Mentor"
import Navbar from "./pages/Navbar"
import Profile from "./pages/Profile"
import Course from "./pages/Courses"
import Chat from "./pages/Chat"
import Temp from "./pages/Temp"
import InputData from "./pages/InputData"
import HomeDashboard from "./pages/Home"
import Chatbot from "./pages/Chatbot"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element=<LandingPage/> />
      <Route path="/home" element=<Home/> />
      <Route path="/yt" element=<Youtube/> />
      <Route path="/jobs" element=<JobSearch/> />
      <Route path="/video" element=<VideoCall/> />
      <Route path="/chat" element=<Chat/> />
      <Route path="/courses" element=<Course/> />
      <Route path="/temp" element=<Temp/> />
      <Route path="/mentors" element=<Mentor/> />
      <Route path="/profile" element=<Profile/> />
      <Route path="/input" element=<InputData/> />
      <Route path="/chatbot" element=<Chatbot/> />
    </Routes>
    </>
  )
}

export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Courses from "./components/Courses";
import Register from "./components/Register";
import "./App.css";
import Chatbot from "./components/Chatbot";
import CourseDetails from "./components/CourseDetails";
import Video from "./components/Video";
import StudentDashboard from "./components/StudentDashboard";
import Logout from './components/Logout';
import Schedule from "./components/Schedule";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/StudentDashboard" element={<StudentDashboard/>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/EditProfile" element={<EditProfile/>}/>
        </Routes>
      </main>
      <Chatbot />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

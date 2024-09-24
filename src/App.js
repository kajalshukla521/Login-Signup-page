// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./globalcomponent/Header";
import Footer from "./globalcomponent/Footer";

function App() {
  return (
    <div>
      {/* Wrap everything inside Router */}
      <Router>
        <Header />
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

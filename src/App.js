// import react router dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// load styles
import "./App.scss";

// import components and routes
import Navbar from "./components/Navbar/Navbar";
import Index from "./routes/Index/Index";
import Home from "./routes/Home/Home";
import Blog from "./routes/Blog/Blog";
import People from "./routes/People/People";
import Places from "./routes/Places/Places";
import LogIn from "./routes/LogIn/LogIn";
import SignUp from "./routes/SignUp/SignUp";
import RecoverPassword from "./routes/RecoverPassword/RecoverPassword";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/people" element={<People />} />
        <Route path="/places" element={<Places />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

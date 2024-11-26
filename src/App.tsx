import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "@components/header";
import "./App.css";
import Home from "@pages/home";
import Dashboard from "@pages/dashboard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Help from "./pages/Help";
import Customer from "./pages/Customer";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import InboxPanel from "./components/InBox";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";

function Layout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      <main>{children}</main>
      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  const [isNewMail, setIsNewMail] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Normal pages */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/customer" element={<Layout><Customer /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>



    </Router>
  );
}

export default App;

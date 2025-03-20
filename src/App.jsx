import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Help from "./pages/Help";
import Customer from "./pages/Customer";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
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
  const [isElectron, setIsElectron] = useState(false);

  useEffect(() => {
    // Check if running inside Electron
    if (window && window.navigator.userAgent.includes("Electron")) {
      setIsElectron(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect / to /login in Electron */}
        {isElectron ? (
          <Route path="/" element={<Navigate to="/login" replace />} />
        ) : (
          <Route path="/" element={<Layout><Home /></Layout>} />
        )}
        
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/customer" element={<Layout><Customer /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

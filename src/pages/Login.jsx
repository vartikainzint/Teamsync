import { useState } from "react";
import { Button, Input } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify"; // ✅ Correct import
import "react-toastify/dist/ReactToastify.css"; // ✅ Required for styles

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({ email, password })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("Login successful! Redirecting...", {
          position: "top-right",
          autoClose: 3000, // Closes in 3 seconds
        });

        setTimeout(() => {
          navigate("/dashboard"); // Redirect after showing toast
        }, 3000);
      } else {
        toast.error("Login failed. Please check your credentials.", {
          position: "top-right",
        });
      }
    });
  };

  return (
    <div className="flex h-screen bg-black text-white min-w-screen">
      {/* Toast Notification Container */}
      <ToastContainer /> {/* ✅ Required for displaying toast messages */}

      {/* Left Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-4">
          <h2 className="text-2xl font-semibold text-center">Log in to TeamSync</h2>
          <p className="text-center text-gray-400">Your business-first collaborative inbox</p>

          <Button className="w-full flex items-center justify-center" icon={<GoogleOutlined />}>
            Continue with Google
          </Button>
          <Button className="w-full flex items-center justify-center" icon={<AppleOutlined />}>
            Continue with Apple
          </Button>
          <Button className="w-full">Single sign-on (SSO)</Button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
{/* 
          <div>
            <label className="block text-gray-400 mb-1">Tenant ID</label>
            <Input
              placeholder="Enter your tenant ID"
              className="py-2 px-3 w-full"
              value={tenantId}
              onChange={(e) => setTenantId(e.target.value)}
            />
          </div> */}

          <div>
            <label className="block text-gray-400 mb-1">Work email</label>
            <Input
              placeholder="Enter your email address"
              className="py-2 px-3 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Password</label>
            <Input.Password
              placeholder="Password"
              className="py-2 px-3 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="text-right text-sm text-blue-400 cursor-pointer">Forgot your password?</div>

          <Button
            type="primary"
            className="w-full bg-blue-600"
            loading={loading}
            onClick={handleLogin}
          >
            Log in
          </Button>

          <p className="text-center text-gray-400">
            New to TeamSync? <Link to="/register" className="text-blue-400">Create an account</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image and Information */}
      <div className="w-1/2 bg-gray-900 flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <p className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐ 4.9 → Over 200 reviews</p>
          <h3 className="text-2xl font-semibold mt-4">
            With TeamSync, we noticed more and better cooperation within the team.
          </h3>
          <p className="text-gray-400 mt-2">Daniel Picón, Pipedrive</p>
          <p className="text-gray-500 mt-6">A reliable partner for world-class SMB teams</p>
          <div className="flex justify-center space-x-4 mt-4">
            <span className="text-gray-400">Buffer</span>
            <span className="text-gray-400">Canny</span>
            <span className="text-gray-400">Tally*</span>
            <span className="text-gray-400">ITALIC</span>
            <span className="text-gray-400">Reflect</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
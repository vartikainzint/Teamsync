import { useState } from "react";
import { Button, Input } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify"; // ✅ Correct import
import "react-toastify/dist/ReactToastify.css"; // ✅ Required for styles
import RightSideSection from "../components/RightSideSection";
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
    <>    
  <div className="flex h-full bg-gray-900 text-white min-w-screen p-6">
  {/* Left Section - Scrollable */}
  <div className="w-full md:w-1/2 h-screen overflow-y-auto flex justify-center items-center pt-12">
    <div className="w-full max-w-md bg-gray-900  rounded-lg shadow-lg">
      <div className="max-w-md w-full space-y-4">
        <h2 className="text-xl font-semibold text-center mb-2">Log in to TeamSync</h2>
        <p className="text-center text-gray-400 text-sm">Your business-first collaborative inbox</p>

        <Button className="w-full flex items-center justify-center !mb-3 !p-4 bg-gray-800 hover:bg-gray-700 rounded-lg" icon={<GoogleOutlined />}>
          Continue with Google
        </Button>
        <Button className="w-full flex items-center justify-center !mb-3 !p-4 bg-gray-800 hover:bg-gray-700 rounded-lg" icon={<AppleOutlined />}>
          Continue with Apple
        </Button>
        <Link to="/ssologin" className="w-full">
        <Button className="w-full flex items-center justify-center !mb-3 !p-4 bg-gray-800 hover:bg-gray-700 rounded-lg">Single sign-on (SSO)</Button>
        </Link>
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div>
          <label className="block text-gray-400 mb-1 text-sm">Work email</label>
          <Input
            placeholder="Enter your email address..."
            className="!py-2 !px-3 w-full bg-gray-700 border border-gray-600 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-1 text-sm">Password</label>
          <Input.Password
            placeholder="Password"
            className="!py-2 !px-3 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="text-right">
        <Link to="/forgotpassword" className="text-blue-400  text-sm text-blue-400 cursor-pointer">Forgot your password?</Link>
        </div>
        <Button type="primary" className="!p-4 w-full bg-blue-600" loading={loading} onClick={handleLogin}>
          Log in
        </Button>

        <p className="text-center text-gray-400 text-sm">
          New to TeamSync? <Link to="/register" className="text-blue-400">Create an account</Link>
        </p>
      </div>
    </div>
  </div>

  {/* Right Section - Fixed */}
  <RightSideSection />
</div>


    </>

  );
};

export default LoginPage;
 
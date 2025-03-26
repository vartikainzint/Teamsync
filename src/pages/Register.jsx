import { useState } from "react";
import { Button, Input, message } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../Redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RightSideSection from "../components/RightSideSection";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("Registration successful! Redirecting to login...", {
          position: "top-right",
          autoClose: 3000,
        });
  
        setFormData({ name: "", email: "", password: "" });
  
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error("Registration failed. Please try again.", {
          position: "top-right",
        });
      }
    });
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white min-w-screen">
      {/* Left Side - Register Form */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto flex justify-center items-center pt-12">
    <div className="w-full max-w-md bg-gray-900  rounded-lg shadow-lg">
      <div className="max-w-md w-full space-y-4">
          <h2 className="text-xl font-semibold text-center mb-2">Create an Account</h2>
          <p className="text-center text-gray-400  text-sm">Sign up for a collaborative inbox</p>

          <Button className="w-full flex items-center justify-center !py-2 !px-3" icon={<GoogleOutlined />}> 
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1 text-sm">Name</label>
              <Input 
                placeholder="Enter your name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                className="!py-2 !px-3 w-full" 
              />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-1 text-sm">Email</label>
              <Input 
                placeholder="Enter your email address" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="!py-2 !px-3 w-full" 
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-1 text-sm">Password</label>
              <Input.Password 
                placeholder="Password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange}
                className="!py-2 !px-3 w-full" 
              />
            </div>
            
            <Button 
              type="primary" 
              htmlType="submit"
              loading={loading}
              className="w-full bg-blue-600"
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </form>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">Registered successfully! Please log in.</p>}

          <p className="text-center text-gray-400 text-sm">Already have an account? <Link to="/login" className="text-blue-400">Log in</Link></p>
        </div>
      </div>
      </div>
  {/* Right Section - Fixed */}
  <RightSideSection />
    </div>
  );
};

export default RegisterPage;

 
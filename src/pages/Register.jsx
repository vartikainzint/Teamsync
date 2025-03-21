import { useState } from "react";
import { Button, Input, message } from "antd";
import { GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../Redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
    <div className="flex min-h-screen bg-black text-white min-w-screen">
      {/* Left Side - Register Form */}
      <div className="w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-4">
          <h2 className="text-2xl font-semibold text-center">Create an Account</h2>
          <p className="text-center text-gray-400">Sign up for a collaborative inbox</p>

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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">Name</label>
              <Input 
                placeholder="Enter your name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                className="py-2 px-3 w-full" 
              />
            </div>
            
            <div>
              <label className="block text-gray-400 mb-1">Email</label>
              <Input 
                placeholder="Enter your email address" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="py-2 px-3 w-full" 
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-1">Password</label>
              <Input.Password 
                placeholder="Password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange}
                className="py-2 px-3 w-full" 
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

          <p className="text-center text-gray-400">Already have an account? <Link to="/login" className="text-blue-400">Log in</Link></p>
        </div>
      </div>

      {/* Right Side - Image and Information */}
      <div className="w-1/2 bg-gray-900 flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <p className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐ 4.9 → Over 200 reviews</p>
          <h3 className="text-2xl font-semibold mt-4">With TeamSync, we noticed more and better cooperation within the team.</h3>
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

export default RegisterPage;

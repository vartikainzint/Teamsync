import { useState } from "react";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify"; // ✅ Correct import
import "react-toastify/dist/ReactToastify.css"; // ✅ Required for styles
import RightSideSection from "../components/RightSideSection";


const ForgotPassword = () => {
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
    <div className="w-full max-w-md bg-gray-900  rounded-lg">
      <div className="max-w-md w-full space-y-4">
        <h2 className="text-xl font-semibold text-center mb-2">Single sign-on (SSO)

        </h2>
        <p className="text-center text-gray-400 text-sm">Sign in using an identity provider configured by your organization

        </p>
        <div>
          <label className="block text-gray-400 mb-1 text-sm">Login keyword
          </label>
          <Input 
                placeholder="Enter your organization login keyword…" 
                name="name" 
                className="!py-2 !px-3 w-full" 
              />
        </div>

        {error && <p className="text-red-500 text-center">No organization matches this keyword. Ask an admin what is your <strong>Login keyword</strong> or open your SSO provider’s dashboard to log in to TeamSync.

</p>}


        <Button type="primary" className="!p-4 w-full bg-blue-600" loading={loading} onClick={handleLogin}>
        Log in with SSO
        </Button>

        <p className="text-center text-gray-400 text-sm">
        <Link to="/login" className="text-blue-400">Log in with a password</Link>
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

export default ForgotPassword;
 
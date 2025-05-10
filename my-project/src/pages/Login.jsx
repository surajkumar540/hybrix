import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../utils/validate"; // Import validation function
import { HiEye, HiEyeOff } from "react-icons/hi";
import bgImage from "../assets/loginImg.png";


const Login = ({ setAuth }) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle state
  const navigate = useNavigate();

  // Login functionality
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(validateLogin(formValues)).length > 0) {
      setError(validateLogin(formValues));
      return;
    }
    setIsSubmit(true);

    if (
      formValues.email === "suraj@test.com" &&
      formValues.password === "suraj@1234"
    ) {
      localStorage.setItem("auth", "true");
      setAuth(true); // Update state immediately
      navigate("/customers");
    } else {
      setError({ general: "Invalid credentials!" });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newObject = { ...formValues, [name]: value };
    setFormValues({ ...newObject });

    if (isSubmit) {
      const errorObj = validateLogin(newObject);
      setError(errorObj);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="relative h-screen w-full bg-contain bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // Replace with your image path
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-between px-10 ">
        {/* Left Text */}
        <div className="w-1/2 hidden md:block text-white pr-8">
          <h1 className="text-[32px] font-bold ">
            Start your journey with us.
          </h1>
          <p className="text-2xl">It brings together your tasks,</p>
          <p className="text-2xl">projects, timelines, files and more.</p>
        </div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Welcome,</h2>
              <p className="text-[#1E1E1E] font-semibold mt-1">
                Login to continue to ENTRA.
              </p>
            </div>
            {error.general && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-red-700 text-sm">{error.general}</p>
              </div>
            )}
            {/* Email Input */}
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className={`p-2 border w-full rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 ${
                  error.email ? "border-red-500" : "border-gray-300"
                }`}
                value={formValues.email}
                onChange={handleChange}
              />
              {error.email && (
                <p className="text-red-500 mt-1 text-xs">{error.email}</p>
              )}
            </div>
            {/* Password Input */}
            <div className="mb-2 relative">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className={`p-2 border w-full rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 ${
                  error.password ? "border-red-500" : "border-gray-300"
                }`}
                value={formValues.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-10 text-gray-500"
              >
                {showPassword ? <HiEye size={20} /> : <HiEyeOff size={20} />}
              </button>
              {error.password && (
                <p className="text-red-500 mt-1 text-xs">{error.password}</p>
              )}
            </div>

            <div className="flex items-center mb-4">
              <label htmlFor="remember" className="ml-2  text-sm font-semibold">
                Forgot Your Password?
              </label>
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-6">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-800"
              >
                Remember Me
              </label>
            </div>
            {/* Submit Button */}
            <button
              className="bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] text-white py-3 w-full rounded-lg font-medium transition duration-200 transform hover:scale-[1.02]"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <p className="text-xs mt-2">Email- suraj@test.com</p>
          <p className="text-xs mt-2">Pass- suraj@1234</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

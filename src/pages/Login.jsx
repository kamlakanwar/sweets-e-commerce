import React, { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate  } from "react-router-dom";

const Login = ({ setIsLoggedIn}) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate ();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Login");
    console.log("Order Details:", formData);
    localStorage.setItem("formData", JSON.stringify(formData))
    navigate('/')
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full max-w-md mx-auto gap-y-4 mt-6 bg-white p-6 rounded shadow"
    >
      {/* Name */}
      <label className="w-full">
        <p className="mb-1 text-gray-800">Full Name <sup className="text-red-500">*</sup></p>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={changeHandler}
          placeholder="Enter your full name"
          className="border rounded w-full p-2"
        />
      </label>

      {/* Phone */}
      <label className="w-full">
        <p className="mb-1 text-gray-800">Phone Number <sup className="text-red-500">*</sup></p>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={changeHandler}
          placeholder="Enter your phone number"
          className="border rounded w-full p-2"
        />
      </label>

      {/* Email */}
      <label className="w-full">
        <p className="mb-1 text-gray-800">Email Address <sup className="text-red-500">*</sup></p>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          className="border rounded w-full p-2"
        />
      </label>

      {/* Address */}
      <label className="w-full">
        <p className="mb-1 text-gray-800">Delivery Address <sup className="text-red-500">*</sup></p>
        <textarea
          name="address"
          required
          value={formData.address}
          onChange={changeHandler}
          placeholder="Enter your full delivery address"
          className="border rounded w-full p-2"
          rows="4"
        />
      </label>

      {/* Password */}
      <label className="w-full relative">
        <p className="mb-1 text-gray-800">Create Password <sup className="text-red-500">*</sup></p>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Create a password"
          className="border rounded w-full p-2"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[38px] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={20} />
          ) : (
            <AiOutlineEye fontSize={20} />
          )}
        </span>
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white rounded py-2 px-4 mt-4 hover:bg-blue-700"
      >
        Login Now
      </button>
    </form>
  );
};

export default Login;

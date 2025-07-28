import React, { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    isCheck: false,
    confirmPassword: "",
  });

  function changeHandler(event) {
  const { name, value, checked, type } = event.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value.trim(),
  }));
  }
  
  function submitHandler(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password doesn't match");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Registration successful!");
    console.log("Order Details:", formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full max-w-md mx-auto gap-y-4 m-10 bg-white p-6 rounded shadow"
    >
      {/* Name */}
      <label className="w-full">
        <p className="mb-1 text-gray-800">
          Full Name <sup className="text-red-500">*</sup>
        </p>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={changeHandler}
          placeholder="Enter your full name"
          className="border rounded w-full p-2"
          autoComplete="name"
        />
      </label>

      {/* Phone */}
      <label className="w-full">
        <p className="mb-1 text-gray-800">
          Phone Number <sup className="text-red-500">*</sup>
        </p>
        <input
          type="tel"
          name="phone"
          required
          pattern="[0-9]{10}"
          inputMode="numeric"
          maxLength="10"
          value={formData.phone}
          onChange={changeHandler}
          placeholder="Enter your 10-digit phone number"
          className="border rounded w-full p-2"
        />
      </label>

      {/* Email */}
      <label className="w-full">
        <p className="mb-1 text-gray-800">
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          className="border rounded w-full p-2"
          autoComplete="email"
        />
      </label>

      {/* Address */}
      <label className="w-full">
        <p className="mb-1 text-gray-800">
          Delivery Address <sup className="text-red-500">*</sup>
        </p>
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
        <p className="mb-1 text-gray-800">
          Create Password <sup className="text-red-500">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Create a password"
          className="border rounded w-full p-2"
          autoComplete="new-password"
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

      {/* Confirm Password */}
      <label className="w-full relative">
        <p className="mb-1 text-gray-800">
          Confirm Password <sup className="text-red-500">*</sup>
        </p>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={changeHandler}
          placeholder="Confirm password"
          className="border rounded w-full p-2"
          autoComplete="new-password"
        />
        <span
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-[38px] cursor-pointer"
        >
          {showConfirmPassword ? (
            <AiOutlineEyeInvisible fontSize={20} />
          ) : (
            <AiOutlineEye fontSize={20} />
          )}
        </span>
      </label>

      {/* Remember Me */}
      <label htmlFor="isCheck" className="flex items-center gap-2">
        <input
          id="isCheck"
          name="isCheck"
          type="checkbox"
          onChange={changeHandler}
          checked={formData.isCheck}
        />
        Remember me
      </label>

      {/* Submit Button */}
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

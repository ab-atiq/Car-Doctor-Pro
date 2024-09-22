"use client";
import Image from "next/image";
import React, { useState } from "react";
import signUpImage from "@/assets/images/login/login.svg";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialSignIn from "../_components/SocialSignIn";
import { useSession } from "next-auth/react";

const SignUpPage = () => {
  const router = useRouter();
  const session = useSession();
  if (session?.status === "authenticated") {
    router.push("/");
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
    if (formData.password !== formData.confirmPassword) {
      toast("Passwords do not match");
      return;
    }
    const res = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });
    console.log(res);

    if (res.status === 201) {
      toast("User created successfully");
      // e.target.reset();
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 rounded-md p-4 md:p-8 gap-6 md:gap-10">
      <div className="hidden md:block w-full">
        {" "}
        <Image
          src={signUpImage}
          alt="sign up"
          quality={100}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <button className="btn btn-primary w-full border-none">
                  Sign Up
                </button>
              </div>
            </form>

            <div className="divider">Or Sign Up with</div>

            <SocialSignIn />

            <div className="text-center mt-6">
              <p>
                Already have an account?{" "}
                <a href="/login" className="text-primary hover:underline">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpPage;

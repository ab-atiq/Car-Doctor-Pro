"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa6";
import logInImage from "@/assets/images/login/login.svg";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialSignIn from "../_components/SocialSignIn";

const LoginPage = () => {
  const router = useRouter();
  const session = useSession();
  if (session?.status === "authenticated") {
    router.push("/");
  }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Sign In Data:", formData);
    const res = await signIn("credentials", {
      ...formData,
      redirect: false,
    });
    // console.log("Sign In Response:", res);
    if (res?.status) {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 rounded-md p-4 md:p-8 gap-6 md:gap-10">
      <div className="w-full">
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  <span className="label-text">Confirm Password</span>
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
              <div>
                <button className="btn btn-primary w-full border-none">
                  Sign In
                </button>
              </div>
            </form>

            <div className="divider">Or Sign In with</div>

            <SocialSignIn />

            <div className="text-center mt-6">
              <p>
                Don&apost have an account?{" "}
                <a href="/signup" className="text-primary hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full">
        {" "}
        <Image
          src={logInImage}
          alt="sign up"
          quality={100}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default LoginPage;

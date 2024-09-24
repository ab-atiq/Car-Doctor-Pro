import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";

const SocialSignIn = () => {
  const router = useRouter();
  const handleSocialSignIn = async (provider: string) => {
    const res = await signIn(provider);
    // console.log(res);
    // if (res?.status === "authenticated") {
    // }
    if (typeof res?.status === "string" && res.status === "authenticated") {
      router.push("/");
    } else if (typeof res?.status === "number" && res.status === 200) {
      router.push("/");
    }
  };
  return (
    <div className="flex justify-center space-x-4">
      <button className="btn btn-circle bg-gray-200 hover:bg-gray-300">
        <FaFacebook className="w-6 h-6 text-blue-500" />
      </button>
      <button className="btn btn-circle bg-gray-200 hover:bg-gray-300">
        <FaGithub
          onClick={() => handleSocialSignIn("github")}
          className="w-6 h-6 text-orange-500"
        />
      </button>
      <button className="btn btn-circle bg-gray-200 hover:bg-gray-300">
        <FaGoogle
          onClick={() => handleSocialSignIn("google")}
          className="w-6 h-6 text-green-600"
        />
      </button>
    </div>
  );
};

export default SocialSignIn;

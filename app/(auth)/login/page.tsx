"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // @ts-ignore
      const { error } = await signIn("credentials", { email, password, redirect: false });
      if (error) {
        console.log("[LOGIN] Error: " + error);
        toast.error(error);
      } else {
        toast.success("Loggeg in registered!!");
      }
    } catch (e) {
      console.log("[LOGIN] Error: " + e);
      toast.error("Error while login!!");
    }
  };

  return (
    <form className="flex flex-col">
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit" onClick={onSubmit}>
        Signup
      </button>

      <button type="button" onClick={() => signIn("google", { redirect: false })}>
        Google
      </button>
    </form>
  );
};

export default Login;

"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post("/api/register", { name, email, password });
      toast.success("Successfully registered!!");
    } catch (error: any) {
      console.error("[Register] Error: " + error.response.data);
    }
  };

  return (
    <form className="flex flex-col space-y-4">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
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

export default Register;

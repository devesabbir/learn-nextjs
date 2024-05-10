"use client";

import { SignInWithCredentialsAction } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState();
  const router = useRouter();
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const res = await SignInWithCredentialsAction(data);
      if (res.user) {
        router.push("/");
      }
    } catch (err) {
      setError("Check your credentials.");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="email" placeholder="Email..." />

      <br />
      <input type="password" name="password" placeholder="Password..." />
      {error && <p>{error}</p>}
      <button type="submit">Sign In</button>
    </form>
  );
}

"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

async function SignWithGoogle() {
  await signIn("google", { redirectTo: "http://localhost:3000/" });
}
async function SignWithfacebook() {
  await signIn("facebook", { redirectTo: "http://localhost:3000/" });
}

async function SignInWithCredentials(formData) {
  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    if (credentials) {
      const res = await signIn("credentials", {
        ...credentials,
        redirect: false,
      });
      console.log(res);
    }
  } catch (error) {
    throw error;
  }
}

async function SignOut() {
  await signOut({ callbackUrl: "http://localhost:3000/login" });
}

export { SignWithGoogle, SignWithfacebook, SignInWithCredentials, SignOut };

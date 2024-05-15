"use server";

import { signIn, signOut } from "@/auth";
import connectMongoDB from "@/service";

async function SignWithGoogle(formData) {
  const url = formData.get("path") || process.env.SITE_URL;
  await signIn("google", { redirectTo: url });
}
async function SignWithfacebook(formData) {
  const url = formData.get("path") || process.env.SITE_URL;
  await signIn("facebook", { redirectTo: url });
}

async function SignInWithCredentials(formData) {
  await connectMongoDB();
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function SignOut() {
  await signOut({ callbackUrl: process.env.SITE_URL + "/login" });
}

export { SignWithGoogle, SignWithfacebook, SignInWithCredentials, SignOut };

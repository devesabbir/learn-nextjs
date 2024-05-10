"use server";

import { signIn, signOut, auth } from "@/auth";

async function SignInWithGoogleAction() {
  await signIn("google", { redirectTo: "http://localhost:3000" });
}

async function SignInWithGitHubAction() {
  await signIn("github", { redirectTo: "http://localhost:3000" });
}

async function SignInWithCredentialsAction(formData) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return auth();
  } catch (error) {
    throw error;
  }
}

async function SignOutAction() {
  await signOut();
}

export {
  SignInWithGoogleAction,
  SignInWithGitHubAction,
  SignInWithCredentialsAction,
  SignOutAction,
};

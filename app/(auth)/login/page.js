"use client";

import SocialLogins from "@/components/auth/SocialLogins";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
const LoginForm = dynamic(() => import("@/components/auth/LoginForm"), {
  ssr: false,
});

const LoginPage = () => {
  const params = useSearchParams();
  const url = new URLSearchParams(params);

  const path = url.get("callbackurl");

  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <LoginForm />

        <SocialLogins path={path} mode={"login"} />
      </div>
    </section>
  );
};

export default LoginPage;

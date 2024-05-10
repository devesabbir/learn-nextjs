import dynamic from "next/dynamic";
import { SignInWithGitHubAction, SignInWithGoogleAction } from "../actions";

const LoginForm = dynamic(() => import("@/app/components/auth/LogInForm"), {
  ssr: false,
});

function LoginPage() {
  return (
    <div className="w-72 mx-auto border p-3">
      <h1 className="text-center">LoginPage</h1>

      <div>
        <LoginForm />
      </div>

      <div className="flex justify-center gap-2">
        <div>
          <form action={SignInWithGitHubAction}>
            <button type="submit">GitHub</button>
          </form>
        </div>
        <div>
          <form action={SignInWithGoogleAction}>
            <button type="submit">Google</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

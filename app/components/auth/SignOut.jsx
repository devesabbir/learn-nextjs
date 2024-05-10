import { SignOutAction } from "@/app/actions";

function SignOut() {
  return (
    <form action={SignOutAction}>
      <button>SignOut</button>
    </form>
  );
}

export default SignOut;

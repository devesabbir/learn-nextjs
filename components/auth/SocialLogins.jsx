import { SignWithGoogle, SignWithfacebook } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";

const SocialLogins = ({ path, mode }) => {
  return (
    <>
      <div className="text-center text-xs text-gray-500">
        {mode === "login" ? (
          <Link className="underline" href={"/register"}>
            Register{" "}
          </Link>
        ) : (
          <Link className="underline" href={"/login"}>
            Login{" "}
          </Link>
        )}
        or Signup with
      </div>
      <div className="flex gap-4">
        <form className="w-full block" action={SignWithfacebook}>
          <input type="hidden" name="path" value={path} />
          <button
            type="submit"
            className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
          >
            <Image src="/assets/fb.png" alt="facebook" width={40} height={40} />
            <span>Facebook</span>
          </button>
        </form>

        <form className="w-full block" action={SignWithGoogle}>
          <input type="hidden" name="path" value={path} />
          <button
            type="submit"
            className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
          >
            <Image
              src="/assets/google.png"
              alt="google"
              width={40}
              height={40}
            />
            <span>Google</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default SocialLogins;

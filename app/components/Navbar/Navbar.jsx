import { auth } from "@/auth";
import Image from "next/image";
import SignOut from "@/app/components/auth/SignOut";
import Link from "next/link";

async function Navbar() {
  const session = await auth();

  return (
    <div className="flex items-center h-30 bg-blue-400 border py-3 px-2">
      <ul className="flex justify-end items-center gap-2 w-full text-slate-50">
        <li className="hover:text-orange-400 cursor-pointer duration-200">
          Home
        </li>
        <li className="hover:text-orange-400 cursor-pointer duration-200">
          About
        </li>
        <li className="hover:text-orange-400 cursor-pointer duration-200">
          Blog
        </li>
        <li>
          {session?.user ? (
            <div className="flex gap-x-2 items-center">
              <span>{session?.user?.name}</span>
              {session?.user?.image && (
                <Image
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}

              <SignOut />
            </div>
          ) : (
            <Link href={"/login"}>Sign In</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

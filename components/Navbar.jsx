import Image from "next/image";
import { auth } from "@/auth";
import SignOut from "./auth/SignOut";
import Link from "next/link";

const Navbar = async ({ menu }) => {
  const { user } = (await auth()) || {};

  return (
    <nav>
      <Link href="/" prefetch={false}>
        <Image
          src="/assets/stayswift.svg"
          alt="Stay Swift Logo"
          width={200}
          height={200}
        />
      </Link>

      {menu && (
        <ul>
          <li>
            <Link href="/">Recommended Places</Link>
          </li>

          <li>
            <Link href="/hotels">Hotels</Link>
          </li>

          <li>
            <Link href="/payment/1">Payment</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {user?.name ? (
              <div className="flex items-center justify-center">
                <span>{user?.name}</span>
                {user?.image && (
                  <Image
                    className="rounded-full w-[32px] h-[32px]"
                    src={user?.image}
                    alt={user?.name}
                    width={32}
                    height={32}
                  />
                )}{" "}
                |
                <SignOut />
              </div>
            ) : (
              <Link href="/login" className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

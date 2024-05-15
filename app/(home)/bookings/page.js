import { auth } from "@/auth";
import ProfileInfo from "@/components/user/ProfileInfo";
import PastBooking from "@/components/user/bookings/PastBooking";
import UpcomingBooking from "@/components/user/bookings/UpcommingBooking";
import { redirect } from "next/navigation";

async function BookingsPage() {
  const session = await auth();

  if (!session) {
    const params = new URLSearchParams();
    params.set("callbackurl", `${process.env.SITE_URL}/bookings`);
    redirect("/login?" + params.toString());
  }

  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingsPage;

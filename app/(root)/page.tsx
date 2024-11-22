import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import OrgDashboard from "../(dashboard)/org-dashboard/page";
import UserDashboard from "../(dashboard)/user-dashboard/page";

export default async function Home() {
    const session = await getServerSession(authOptions);
    const userRole = session?.user?.role;

    console.log("Session:", session);
    console.log("User role:", userRole);

    return (
        <>
            <section className="bg-primary-50 bg-contain py-5 md:py-10">
                <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 max-w-screen-xl mx-auto">
                    <div className="flex flex-col justify-center gap-8 mx-10 sm:mx-20">
                        <h1 className="h1-bold">Empowering Communities Against Injustice</h1>
                        <p className="p-regular-20 md:p-regular-24 ">Together, we can turn whispers of hope into movements for lasting change.</p>
                        <Button size="lg" asChild className="button w-fit sm:w-full">
                            <Link href="#events">
                                Explore Now
                            </Link>
                        </Button>
                    </div>

                    <Image
                        src="" alt="hero" width={1000} height={1000}
                        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]">
                    </Image>
                </div>
            </section>

            <section id="events" className="wrapper my-8 mx-10 sm:mx-20 flex flex-col gap-8 md:gap-12 max-w-screen-xl mx-auto">
                <h2 className="h2-bold">Trusted by <br /> hundreds of Organisations</h2>
                <div className="flex w-full flex-col gap-5 md:flex-row">
                    Search
                    CategoryFilter
                </div>
                <div>
                    {/* Use userRole to conditionally render dashboards */}
                    {/* {userRole === 'USER' ? <UserDashboard /> : <OrgDashboard />} */}
                    { <OrgDashboard/> }
                    {/*fix later, should be in components folder instead of a separate page */ }
                </div>
            </section>
        </>
    );
}

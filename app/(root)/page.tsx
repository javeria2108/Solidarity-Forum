import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default function Home() {
  const session=getServerSession(authOptions)
  console.log(session)
  return (
    <>
    Good morning
    </>
  );
}

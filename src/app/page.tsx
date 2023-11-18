import DottedButton from "@/components/ui/dotted-button";
import Footer from "@/components/footer";
import HeroImage from "@/components/image-hero";
import Navbar from "@/components/navbar";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession()
  return (
    <main >
      <Navbar />
      <div className="checks-container h-[88vh] w-[100vw] flex items-center justify-evenly flex-col lg:flex-row">
        <div className="flex flex-col ">
          <span className="font-black text-white lg:text-6xl text-2xl"> DITCH BORING </span> <br />
          <span className="font-black text-white lg:text-6xl text-2xl"> & LONGGG </span> <br />
          <span className="font-black text-white lg:text-6xl text-2xl"> LITERATURE!! </span> <br />
          {
            session
              ? <Link href="/temp"> <DottedButton> Lets Go</DottedButton> </Link>
              : null
          }
        </div>
        <HeroImage />
      </div>
      <Footer />
    </main>
  )
}

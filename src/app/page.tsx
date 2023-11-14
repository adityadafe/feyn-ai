import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Navbar />
      <div className="checks-container h-[88vh] w-[100vw] flex items-center justify-evenly flex-col lg:flex-row">
        <div className="flex flex-col ">
          <span className="font-black text-white lg:text-6xl text-2xl"> DITCH BORING </span> <br />
          <span className="font-black text-white lg:text-6xl text-2xl"> & LONGGG </span> <br />
          <span className="font-black text-white lg:text-6xl text-2xl"> LITERATURE!! </span> <br />
          <Button variant="secondary" className="lg:w-40 lg:h-12 font-recoleta lg:text-3xl text-2xl animate-pulse">Lets Go</Button>
        </div>
        <Image
        className="animate-bounce"
          src="/hero.png"
          alt="Hero Png"
          width={400}
          height={400}
        />
      </div>
      <Footer />
    </main>
  )
}

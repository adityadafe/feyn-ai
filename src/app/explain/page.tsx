import Navbar from "@/components/navbar"
import NeedToLogin from "@/components/need-to-login"
import { getServerSession } from "next-auth"

export default async function ExplainPage() {
  const session = await getServerSession()

  return (
    <>
    <Navbar/>
      {session ? null : <NeedToLogin />}
    </>
  )
}

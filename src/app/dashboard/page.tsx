import Navbar from "@/components/navbar"
import NeedToLogin from "@/components/need-to-login"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import UploadButton from "@/components/upload-Button"

export default async function ExplainPage() {
  const session = await getServerSession(authOptions)

  return (
    <>
      <Navbar />
      {session ? <UploadButton /> : <NeedToLogin />}
    </>
  )
}

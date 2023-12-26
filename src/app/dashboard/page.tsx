import Navbar from "@/components/navbar"
import NeedToLogin from "@/components/need-to-login"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import UploadButton from "@/components/upload-Button"
import DashBoardPdf from "@/components/dasboard-pdf"
import { db } from "../db"

export default async function ExplainPage() {
  const session = await getServerSession(authOptions)
  const filesFromDb = await db.file.findMany()

  if (!session) {
    return (
      <NeedToLogin />
    )
  }

  return (
    <>
      <Navbar />
      <UploadButton />
      <DashBoardPdf data={filesFromDb} />
    </>
  )
}

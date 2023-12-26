import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { db } from "@/app/db"
import ChatWrapper from "@/components/chat-wrapper"
import Navbar from "@/components/navbar"
import NeedToLogin from "@/components/need-to-login"
import PdfDoesNotExist from "@/components/pdf-does-not-exist"
import PdfRenderer from "@/components/pdf-renderer"
import { GetUserId } from "@/lib/getuserid"
import { getServerSession } from "next-auth"
import { Toaster } from "react-hot-toast"


interface Pageprops {
  params: {
    feildId: string
  }
}

export default async function DashboardWithFeildId({ params }: Pageprops) {

  const { feildId } = params
  const session = await getServerSession(authOptions)
  const user = await GetUserId()

  const file = await db.file.findFirst({
    where: {
      id: feildId,
      userId: user?.id
    }
  })

  if (!session) {
    return (<NeedToLogin />)
  }

  if (!file) {
    return (<PdfDoesNotExist />)

  }



  return (
    <>
      <Navbar />
      <div><Toaster position="top-right" reverseOrder={false} /></div>
      <div className="flex flex-row h-[90vh] w-[100vw]">
        {file ? <PdfRenderer url={file.url} /> : null}
        <ChatWrapper />
      </div>
    </>
  )
}

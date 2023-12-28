import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { db } from "@/app/db"
import ChatWrapper from "@/components/chat/chat-wrapper"
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
      <div className="flex-1 justify-between flex lg:flex-row h-[calc(100vh-3.5rem)] flex-col">
        <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">

          <div className="flex-1 xl:flex">
            <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
              {file ? <PdfRenderer url={file.url} /> : null}
            </div>
          </div>

          <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0 mt-12">
            <ChatWrapper fileId={file.id} userId={user?.id!}/>
          </div>

        </div>
      </div>
    </>
  )
}

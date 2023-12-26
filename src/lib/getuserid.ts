import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { db } from "@/app/db"
import { getServerSession } from "next-auth"

export async function GetUserId() {

  const session = await getServerSession(authOptions)

  const user = await db.user.findFirst({
    where: {
      email: session?.user?.email
    }
  })

  return user
}

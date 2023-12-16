import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "@/app/db";

const f = createUploadthing();


const middleware = async () => {
	const session: {
		user: {
			name: string,
			image: string,
			email: string
		}
	} | null = await getServerSession(authOptions)

	const getUser = await db.user.findFirst({
		where: { email: session?.user.email }
	})
	return { userId: getUser?.id }
}

const onUploadComplete = async ({ metadata, file }: {
	metadata: Awaited<ReturnType<typeof middleware>>
	file: {
		key: string
		name: string
		url: string
	}
}) => {

	const doesFileExist = await db.file.findFirst({
		where: {
			key: file.key
		}
	})

	if (doesFileExist) return

	const createdFile = await db.file.create({
		data: {
			key: file.key,
			name: file.name,
			userId: metadata.userId,
			url: `https://utfs.io/f/${file.key}`,
		}
	})


	return { createdFile }
}


export const ourFileRouter = {

	pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
		.middleware(middleware)
		// @ts-ignore
		.onUploadComplete(onUploadComplete),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

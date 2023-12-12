import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "@/app/db";
const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

const middleware = async () => {

	const user: {
		user: {
			name: string,
			image: string,
			email: string
		}
	} | null = await getServerSession(authOptions)


	if (!user) throw new Error('Unauthorized')

	const temp = await db.user.findUnique({
		where: { email: user.user.email }
	})


	return { userId: temp?.id }
}


const onUploadComplete = async ({
	metadata,
	file,
}: {
	metadata: Awaited<ReturnType<typeof middleware>>
	file: {
		key: string
		name: string
		url: string
	}
}) => {
	const isFileExist = await db.file.findFirst({
		where: {
			key: file.key,
		},
	})

	if (isFileExist) return

	await db.file.create({
		data: {
			key: file.key,
			name: file.name,
			userId: metadata.userId,
			url: `https://utfs.io/f/${file.key}`,
		},
	})

}


export const ourFileRouter = {

	pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
		.middleware(async ({ req }) => {
			const user = auth(req);
			if (!user) throw new Error("Unauthorized");
			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log("Upload complete for userId:", metadata.userId);
			console.log("file url", file.url);
			return { uploadedBy: metadata.userId };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

import { db } from "../db"

export default async function POST(req: Request) {

	const { fileId, userId } = await req.json()

	const messages = await db.message.findMany({
		where: {
			fileId,
			userId
		},
		orderBy: {
			createdAt: 'desc'
		},
	})

	return messages
}

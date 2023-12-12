import { db } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(response: Response) {

	try {
		const allUsers = await db.user.findMany()
		return NextResponse.json(allUsers)
	} catch (err) {
		return NextResponse.json({
			error: err
		})
	}


}


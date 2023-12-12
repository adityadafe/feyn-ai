import { NextResponse } from "next/server";

export async function GET(response: Response) {
	return NextResponse.json({
		health: 'Server is running smoothly'
	}, { status: 200 })
}

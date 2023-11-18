'use client'
import { Button } from "./button"
import { signIn } from "next-auth/react"

export default function LoginButton() {
  return (
    <Button
      variant="ghost"
      className="text-white font-recoleta mr-5 text-2xl mt-5 lg:mt-0"
      onClick={() => signIn('github', { callbackUrl: '/' })}
    > Login</Button>

  )
}

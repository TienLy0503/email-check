"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function setCookies(secret: string) {
  cookies().set("secretKey", secret)
  redirect("/email")

}
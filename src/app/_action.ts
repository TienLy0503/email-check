"use server"

import { redirect } from "next/navigation";

declare global {
  var secret: string
}

export async function getSecret() {
  return globalThis.secret
}

export async function setSecret(formData: FormData) {
  globalThis.secret = formData.get("secret") as string

  redirect("/email")
}

export async function clearSecret() {
  globalThis.secret = ""
}
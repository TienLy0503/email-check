"use server"

import { cookies } from "next/headers";

export async function setCookies(formData: FormData) {
  cookies().set("secretKey", formData.get("secret") as string);
}
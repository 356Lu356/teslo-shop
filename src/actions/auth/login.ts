"use server";
import { signIn } from "@/auth.config";
import { sleep } from "@/utils";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {

    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });
  return "Success";
  } catch (error) {
      return "CredentialsSignin";
  }
}

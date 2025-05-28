"use server";
import { prisma } from "@/lib/db";
import { signToken } from "@/lib/jwt";
import { verifyPassword } from "@/lib/passwrd";
import { cookies } from "next/headers";

export async function loginUser(username: string, password: string) {
  // Check if the user exists
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return new Error("User not found");
  }

  if (!(await verifyPassword(password, user.password))) {
    return new Error("Invalid password");
  }

  const cookie = await cookies();

  cookie.set("token", await signToken({ userId: user.id.toString() }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "strict",
  });
  return {
    message: "Login successful",
    user: {
      id: user.id,
      username: user.username,
    },
  };
}

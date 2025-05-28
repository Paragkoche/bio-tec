// middleware.ts
"use server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { signToken, verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import { prisma } from "@/lib/db"; // Adjust the import based on your db setup

export async function middleware(request: NextRequest) {
  const token = (await cookies()).get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  console.log("Token found:", token.value);

  const decoded = await verifyToken(token.value);

  if (!decoded) {
    console.log("Invalid token");

    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  console.log("Token decoded successfully:", decoded);

  //   const userId = (decoded.payload as any).userId;
  //   if (!userId) {
  //     console.log("User ID not found in token");
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }
  //   const user = await prisma.user.findUnique({
  //     where: { id: userId },
  //   });
  //   if (!user) {
  //     console.log("User not found in database");
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }

  // You can add the user info to headers for downstream use
  const response = NextResponse.next();
  //   (await cookies()).set("token", await signToken(decoded as any, "30d")); // Refresh token expiration
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*"], // secure routes
};

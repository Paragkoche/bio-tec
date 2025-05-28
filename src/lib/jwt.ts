"use server";
import jwt from "jsonwebtoken";
import type { StringValue } from "ms";
import { jwtVerify } from "jose";
const JWT_SECRET = process.env.JWT_SECRET!;
interface JwtPayload {
  userId: string;
}
export const signToken = async (
  payload: JwtPayload,
  expiresIn: StringValue = "30d"
) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn,
  });
};

export const verifyToken = async (token: string) => {
  try {
    return jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
  } catch (error) {
    console.log("JWT verification failed:", error);

    return null;
  }
};

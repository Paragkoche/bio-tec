"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/action/login";
import { toast } from "sonner";
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});
type LoginFormInputs = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur", // Validate on blur
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    loginUser(data.username, data.password).then((result) => {
      if (result instanceof Error) {
        // Handle error
        console.error(result.message);
        if (result.message === "User not found") {
          setError("username", {
            type: "manual",
            message: "User not found",
          });
        } else if (result.message === "Invalid password") {
          setError("password", {
            type: "manual",
            message: "Invalid password",
          });
        }
      } else {
        // Handle successful login
        console.log("Login successful", result);
        toast.success("Login successful");
        // Redirect or perform other actions as needed
        window.location.href = "/dashboard"; // Example redirect
      }
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="card w-full max-w-sm shadow-lg">
        <div className="card-body">
          <h2 className="card-title justify-center mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username" className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                id="username"
                className={`input input-bordered w-full ${
                  errors.username ? "input-error" : ""
                }`}
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <span className="text-error text-sm">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                className={`input input-bordered w-full ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-error text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

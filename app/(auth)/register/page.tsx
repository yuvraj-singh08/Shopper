"use client";
import React from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa6";
import Link from "next/link";
import { RegisterUser } from "./actions";

const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name should have at least 2 characters.")
      .max(50, "Name should not exceed 50 characters.")
      .refine(
        (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
        "Name should contain only alphabets."
      ),
    contact: z.string().refine(
      (value) =>
        z.string().email().safeParse(value).success ||
        z
          .string()
          .regex(/^\+?\d{10,12}$/)
          .safeParse(value).success,
      "Contact should be a valid email address or phone number."
    ),
    password: z
      .string()
      .min(6, "Password should have at least 6 characters.")
      .regex(/\d/, "Password should contain at least one numeric character."),
    confirmPassword: z
      .string()
      .min(6, "Password should have at least 6 characters.")
      .regex(/\d/, "Password should contain at least one numeric character."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const Page = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      contact: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>, e: any) {
    e.preventDefault();
    console.log(values);
    const response = await RegisterUser(
      {
        username: values.name,
        contact: values.contact,
        password: values.password,
      }
    );
    console.log(response);
  }

  return (
    <>
      <div className="signUpWrapper bg-red-50">
        <div className="formWrapper" style={{ backgroundColor: "#082f49" }}>
          <div className="left" style={{ backgroundColor: "#082f49" }}>
            <h3 className="title text-center line-clamp-2 my-4">
              Looks like you are new here!
            </h3>
            <p className="line-clamp-3 mx-4 my-15">
              Sign up with your mobile number or email to get started.
            </p>
            <Link href={"/login"}>
              <Button className="bg-sky-950 hover:bg-blue-900 border-blue-500 text-zinc-300 hover:border-blue-200 hover:text-zinc-100 transition-colors border rounded-full px-8">
                Sign In
              </Button>
            </Link>
          </div>
          <div className="right">
            <h3 className="text-center text-2xl font-semibold">
              Register Here
            </h3>
            <div className="socialSignUpOptions">
              <Button variant={"outline"} className="socialFormBtn">
                <FaGoogle className="h-5 w-5" style={{ color: "#FFD43B" }} />
              </Button>
              <Button variant={"outline"} className="socialFormBtn">
                <FaFacebook className="h-5 w-5" style={{ color: "#007CDB" }} />
              </Button>
              <Button variant={"outline"} className="socialFormBtn">
                <FaApple className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-center">or use this option</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-0 mb-2">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem className="space-y-0 mb-2">
                      <FormLabel>Email or Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="admin@example.com or +910123456789"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-0 mb-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="space-y-0 mb-2">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="text-center text-xs mt-4">
                  By continuing, you agree to GShopper&apos;s&nbsp;
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms of Use
                  </a>
                  &nbsp; and&nbsp;
                  <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <Button type="submit" className="w-full bg-sky-950 hover:bg-sky-900">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

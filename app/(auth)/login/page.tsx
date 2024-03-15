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
import { Login } from "./actions";
import { join } from "path";
import { useRouter } from 'next/navigation';
import { revalidatePath } from "next/cache";

const signInSchema = z.object({
  contact: z
    .string()
    .regex(/^\+?\d{10,12}$/i, "Phone number must be valid.")
    .or(z.string().email("Email must be valid.")),
  password: z.string().min(6, "Password Should have at least 6 characters."),
});

const Page = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      contact: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof signInSchema>, e: any) {
    e.preventDefault();
    console.log(values);
    const response = await Login({ email: values.contact, password: values.password });
    const auth_token = "Bearer " + response.auth_token;
    const refresh_token = "Bearer " + response.refresh_token;
    console.log(response);
    localStorage.setItem("auth_token", auth_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("username", response.user.username);
    localStorage.setItem("email", response.user.email);
    localStorage.setItem("phone", response.user.phone);
    // revalidatePath("/");
    router.push('/');

  }

  // function handleSubmit(e: any) {
  //   e.preventDefault();
  //   console.log("Form submitted")
  //   Login();
  // }

  return (
    <>

      <div className="signInWrapper bg-red-50 relative">
        <div className="formWrapper absolute mx:auto top-14" style={{ backgroundColor: "#082f49" }}>
          <div className="left" style={{ backgroundColor: "#082f49" }}>
            <h3 className="text-center text-2xl font-semibold line-clamp-2 my-4">
              Welcome back!
            </h3>
            <p className="line-clamp-3 my-15">
              Enter your personal details and start the journey with us
            </p>
            <Link href={"/register"}>
              <Button className="bg-sky-950 hover:bg-blue-900 border-blue-900 text-blue-300 hover:border-blue-200 hover:text-blue-100 transition-colors border rounded-full px-8">
                Sign Up
              </Button>
            </Link>
          </div>
          <div className="right">
            <h3 className="text-center text-2xl font-semibold">Sign In Here</h3>
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
                <p className="text-right text-xs my-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    Forgot Password?
                  </a>
                </p>

                <p className="text-center text-xs mt-16">
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
                <Button
                  type="submit"
                  className="w-full bg-sky-950 hover:bg-sky-900"
                >
                  Log In
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

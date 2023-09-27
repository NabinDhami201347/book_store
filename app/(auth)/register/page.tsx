"use client";

import axios from "axios";
import toast from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components//ui/separator";
import { SocialButtons } from "@/components/social-buttons";

const formSchema = z
  .object({
    name: z.string().min(5, {
      message: "Name must be greater than 5 characters",
    }),
    email: z.string().email({
      message: "Must be a valid email address",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirm_password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords don't match",
  });

const Register = () => {
  const session = useSession();
  const router = useRouter();
  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    // @ts-ignore
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      toast.success("Successfully registered!!");
      router.push("/login");
    } catch (error: any) {
      setError(error.response.data);
      console.error("[Register] Error: " + error.response.data);
    }
  };

  if (session.data?.user) {
    return redirect("/");
  }

  return (
    <Card className="w-11/12 sm:w-1/2 mx-auto border mt-2  rounded-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>Enter your email below to create your account</CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
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
              name="email"
              render={({ field }) => (
                <FormItem className="my-0">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="username@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Create account
            </Button>
          </form>
        </Form>
        <Separator />
        <SocialButtons />
      </CardContent>

      <CardFooter>
        <Link href="/login" className="text-blue-600 underline text-xs font-semibold  w-full text-right">
          Already have an account?
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Register;

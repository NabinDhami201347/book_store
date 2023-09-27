"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components//ui/separator";
import { SocialButtons } from "@/components/social-buttons";

const formSchema = z.object({
  email: z.string().email({
    message: "Must be a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

const Login = () => {
  const session = useSession();

  const router = useRouter();
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    // @ts-ignore
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (res?.error) {
      setError(res?.error);
    } else {
      toast.success("Successfully logged in!");
      form.reset();
      router.replace("/");
    }
  };

  if (session.data?.user) {
    return redirect("/");
  }

  return (
    <Card className="w-11/12 sm:w-1/2 mx-auto mt-10">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login to your account</CardTitle>
        {/* <CardDescription>Enter credentials in order to burrow books.</CardDescription> */}
      </CardHeader>

      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            {error && <p className="text-rose-600">{error}</p>}

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
        <Separator />
        <SocialButtons />
      </CardContent>

      <CardFooter>
        <Link href="/register" className="text-blue-600 underline text-xs font-semibold  w-full text-right">
          Didnt have an account?
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Login;

"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export const SocialButtons = () => {
  const router = useRouter();

  const onClick = async () => {
    await signIn("google");
    router.refresh();
  };

  return (
    <div className="grid w-full">
      <Button variant="outline" onClick={onClick}>
        <FcGoogle className="mr-2 h-4 w-4" />
        <p>Continue with Google</p>
      </Button>
    </div>
  );
};

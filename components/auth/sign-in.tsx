"use client";

import { Github, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

const SignInButton = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const HandleSignin = async () => {
    try {
      setLoading(true);
      await signIn("github", {
        callbackUrl: "/mail",
        redirect: true,
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    }
  };
  return (
    <>
      <Button
        disabled={loading}
        variant="outline"
        size={"sm"}
        onClick={() => HandleSignin()}
        type="button"
        className="transition-all duration-300"
      >
        {loading ? (
          <Loader className="h-4 w-4 mr-2 animate-spin" />
        ) : (
          <Github className="h-4 w-4 mr-2" />
        )}
        {loading ? "Signing in..." : "Github Sign In"}
      </Button>
    </>
  );
};

export default SignInButton;

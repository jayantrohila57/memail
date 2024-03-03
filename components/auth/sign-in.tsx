"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import React from "react";
import { toast } from "sonner";
import { Github, Loader } from "lucide-react";

const SignInButton = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const HandleSignin = async () => {
    try {
      setLoading(true);
      const data = await signIn("github", {
        callbackUrl: "/dashboard",
        redirect: true,
      });
      data?.ok && toast.success("Login successful");
      data?.error && toast.error("Login successful");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <>
      <Button
        disabled={loading}
        variant="default"
        onClick={() => HandleSignin()}
        type="button"
        className="transition-all duration-300"
      >
        {loading ? (
          <Loader className="h-4 w-4 mr-2 animate-spin" />
        ) : (
          <Github className="h-4 w-4 mr-2" />
        )}
        {loading ? "Signing in..." : "Github"}
      </Button>
    </>
  );
};

export default SignInButton;

"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import React from "react";
import { toast } from "sonner";
import { Loader, LogOutIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const SignOutButton = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const HandleSignOut = async () => {
    try {
      setLoading(true);
      await signOut({
        callbackUrl: "/auth",
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
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={loading}
            variant="ghost"
            size={"sm"}
            onClick={() => HandleSignOut()}
            type="button"
            className="transition-all duration-300"
          >
            {loading ? (
              <Loader className="h-4 w-4 animate-spin" />
            ) : (
              <LogOutIcon className="h-4 w-4 " />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Sign Out Now</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
};

export default SignOutButton;

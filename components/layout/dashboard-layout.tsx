"use client";

import { ReactNode, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import {
  Archive,
  ArchiveX,
  File,
  Inbox,
  Mail,
  Send,
  Trash2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Nav } from "../mail/nav";
import { TooltipProvider } from "../ui/tooltip";
import SignOutButton from "../auth/sign-out";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  const defaultLayout = [20, 80];
  const [isCollapsed, setIsCollapsed] = useState(false);
  console.log(isCollapsed);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={4}
          collapsible={true}
          minSize={12}
          maxSize={30}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className={cn(
            isCollapsed &&
              "h-[100vh] w-full relative min-w-[40px] transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-start  justify-start",
              isCollapsed ? "h-[52px] p-4" : "p-4"
            )}
          >
            <Link href={"/"}>
              <div className="flex flex-row w-full">
                <Mail className="h-6 w-6 mr-2" />
                <span
                  className={cn("text-xl font-bold", isCollapsed && "hidden")}
                >
                  MeMail
                </span>
              </div>
            </Link>
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                link: "/dashboard/inbox",
                variant: "default",
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                link: "/dashboard/inbox",
                variant: "ghost",
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
                link: "/dashboard/inbox",
                variant: "ghost",
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
                variant: "ghost",
                link: "/dashboard/inbox",
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                link: "/dashboard/inbox",
                variant: "ghost",
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                link: "/dashboard/inbox",
                variant: "ghost",
              },
            ]}
          />

   
          <div className="h-auto absolute bottom-5 p-2  w-full flex justify-start items-center">
            <SignOutButton />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};

export default Layout;

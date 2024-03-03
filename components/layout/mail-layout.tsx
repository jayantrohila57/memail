"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Archive, File, Inbox, Mail, PencilIcon, Send, Trash2 } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import SignOutButton from "../auth/sign-out";
import { Nav } from "../mail/nav";
import { TooltipProvider } from "../ui/tooltip";

const MailLayout = ({ children }: { children: ReactNode }) => {
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
          collapsedSize={3.5}
          collapsible={true}
          minSize={12}
          maxSize={30}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className={cn(
            isCollapsed &&
              "h-[100vh] w-full relative min-w-[36px] transition-all duration-300 ease-in-out"
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
                title: "Create Mail",
                label: "",
                icon: PencilIcon,
                link: "/mail/create",
              },
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                link: "/mail/inbox",
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                link: "/mail/draft",
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
                link: "/mail/sent",
              },

              {
                title: "Trash",
                label: "",
                icon: Trash2,
                link: "/mail/trash",
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                link: "/mail/archive",
              },
            ]}
          />

          <div className="h-auto max-w-14   absolute bottom-5 p-2  w-full flex justify-start items-center">
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

export default MailLayout;

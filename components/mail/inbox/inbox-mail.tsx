"use client";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail } from "@prisma/client";
import { InboxMailDisplay } from "./inbox-display";
import { InboxMailList } from "./inbox-list";
import { useState } from "react";

export function InboxMail({ mails }: { mails: Mail[] }) {
  const [selected,setSelected]=useState(mails[0]?.id||"")
  const defaultLayout = [265, 440, 655];

  return (
    <ResizablePanelGroup
      className="h-full max-h-screen items-stretch hidden flex-col md:flex"
      direction="horizontal"
    >
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30} maxSize={60}>
        <Tabs defaultValue="all">
          <div className="flex items-center px-4 py-1.5">
            <h1 className="text-xl font-bold">Inbox</h1>
            <TabsList className="ml-auto">
              <TabsTrigger
                value="all"
                className="text-zinc-600 dark:text-zinc-200"
              >
                All mail
              </TabsTrigger>
              <TabsTrigger
                value="unread"
                className="text-zinc-600 dark:text-zinc-200"
              >
                Unread
              </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>

          <InboxMailList setSelected={setSelected} mails={mails} />
        </Tabs>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
        <InboxMailDisplay
          mail={mails.find((item) => item?.id === selected) || null}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

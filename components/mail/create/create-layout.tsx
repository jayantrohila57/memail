import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CreateMail from "./create-mail";
import { getUserAuth } from "@/lib/auth/utils";
const CreateMailLayout = async () => {
  const { session } = await getUserAuth();
  const user = session?.user;
  return (
    <section className="h-screen w-full">
      <ResizablePanelGroup direction="horizontal" className="w-full ">
        <ResizablePanel defaultSize={50}>
          <CreateMail user={user} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}></ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
};
export default CreateMailLayout;

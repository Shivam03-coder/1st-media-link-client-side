import { SidebarTrigger } from "@/components/ui/sidebar";
import AddTaskBtn from "@/components/add-task-btn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FormModal from "../task_forms/form-dialogs";
import HeaderNavs from "./header_navs";
const AppSidebarHeader = () => {
  return (
    <header className="sticky left-0 top-0 z-40 flex h-16 w-full items-center gap-2 border-b bg-blue-200 px-4">
      <SidebarTrigger className="-ml-1" />
      <div className="flex w-full items-center justify-between">
        <HeaderNavs />
        <AddTaskBtn />
        <FormModal />
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default AppSidebarHeader;

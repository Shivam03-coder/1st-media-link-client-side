import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { dummyData } from "@/data";
import TaskTableViewTab from "./tab_view/table/task_table_view_tab";
import KanBanView from "./tab_view/kanban/kanban_view_tab";
import CalendarViewTab from "./tab_view/calendar/calender_view_tab";

const TabList = () => {
  return (
    <section className="col-span-full space-y-4 rounded-lg bg-white p-4 shadow-md">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-800">Task Lists</h3>

      {/* Tabs */}
      <Tabs defaultValue="Kanban" className="w-full">
        {/* Tab Navigation */}
        <TabsList className="flex items-center justify-between rounded-lg p-2">
          <div className="flex gap-2 rounded-lg bg-white p-1 shadow">
            <TabsTrigger
              value="Kanban"
              className="rounded-md px-4 py-2 transition hover:bg-gray-100"
            >
              Kanban
            </TabsTrigger>
            <TabsTrigger
              value="Tabel"
              className="rounded-md px-4 py-2 transition hover:bg-gray-100"
            >
              Table
            </TabsTrigger>
            <TabsTrigger
              value="Calander"
              className="rounded-md px-4 py-2 transition hover:bg-gray-100"
            >
              Calander
            </TabsTrigger>
          </div>
          {/* <TaskTabsBtn /> */}
        </TabsList>

        {/* Tab Content */}
        <TabsContent value="Kanban">
          <KanBanView data={dummyData} />
        </TabsContent>
        <TabsContent value="Tabel">
          <TaskTableViewTab />
        </TabsContent>
        <TabsContent value="Calander">
          <CalendarViewTab data={dummyData} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default TabList;

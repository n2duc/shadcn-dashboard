import { DEFAULT_TASKS } from "@/lib/utils";
import { TaskType } from "@/types";
import { useState } from "react";
import Column from "./column";
import BurnBarrel from "./burn-barrel";
import { ScrollArea } from "@/components/ui/scroll-area";

const Board = () => {
  const [tasks, setTasks] = useState<TaskType[]>(DEFAULT_TASKS);

  return (
    <ScrollArea>
      <div className="flex max-h-full h-full w-full gap-3">
        <Column
          title="Data Structures"
          column="data-structures"
          headingColor="text-emerald-500"
          tasks={tasks}
          setTasks={setTasks}
        />
        <Column
          title="Algorithms"
          column="algorithms"
          headingColor="text-yellow-200"
          tasks={tasks}
          setTasks={setTasks}
        />
        <Column
          title="Techniques"
          column="techniques"
          headingColor="text-blue-200"
          tasks={tasks}
          setTasks={setTasks}
        />
        <BurnBarrel setTasks={setTasks} />
      </div>
    </ScrollArea>
  )
}

export default Board
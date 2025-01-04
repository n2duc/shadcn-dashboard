import { TaskType } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import Task from "./task";
import DropIndicator from "./drop-indicator";
import AddTask from "./add-task";

export type ColumnProps = {
  title: string;
  headingColor: string;
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
} & Pick<TaskType, "column">;

const Column = ({
  title,
  headingColor,
  tasks,
  column,
  setTasks,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    task: TaskType
  ) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const taskId = e.dataTransfer.getData("taskId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = (element as HTMLDivElement).dataset.before || "-1";

    if (before !== taskId) {
      let copy = [...tasks];

      let taskToTransfer = copy.find((task) => task.id === taskId);
      if (!taskToTransfer) return;
      taskToTransfer = { ...taskToTransfer, column };

      copy = copy.filter((task) => task.id !== taskId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(taskToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((task) => task.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, taskToTransfer);
      }

      setTasks(copy);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    (el.element as HTMLElement).style.opacity = "1";
  };

  const clearHighlights = (els?: Element[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      (i as HTMLElement).style.opacity = "0";
    });
  };

  const getNearestIndicator = (
    e: React.DragEvent<HTMLDivElement>,
    indicators: Element[]
  ) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredTasks = tasks.filter((task) => task.column === column);

  return (
    <div className="w-56 shrink-0 h-full">
      <div className="pb-3 flex items-center justify-between bg-primary-foreground select-none sticky top-0 left-0">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-foreground mr-4">
          {filteredTasks.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-[calc(100vh-220px)] w-full rounded-sm transition-colors ${active ? "bg-card/50" : "bg-card/0"}`}
      >
        {filteredTasks.map((task) => (
          <Task key={task.id} {...task} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId={null} column={column} />
        <AddTask column={column} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Column;

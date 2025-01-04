import { useState } from "react";
import { ColumnProps } from "./column";
import { Flame, Trash } from "lucide-react";

const BurnBarrel = ({ setTasks }: Pick<ColumnProps, "setTasks">) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(false);
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const taskId = e.dataTransfer.getData("taskId");
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setActive(false);
  }

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl sticky top-10 right-0 ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border bg-card/50 text-neutral-500"
      }`}
    >
      {active ? <Flame className="animate-bounce" /> : <Trash />}
    </div>
  )
}

export default BurnBarrel
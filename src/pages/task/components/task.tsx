import { TaskType } from "@/types"
import DropIndicator from "./drop-indicator";
import { motion } from "motion/react";

type TaskProps = TaskType & {
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, task: TaskType) => void;
}

const Task = ({ title, id, column, handleDragStart }: TaskProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => {
          const dragEvent = e as unknown as React.DragEvent<HTMLDivElement>;
          handleDragStart(dragEvent, { id, title, column });
        }}
        className="cursor-grab rounded-md border bg-background text-card-foreground shadow p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  )
}

export default Task
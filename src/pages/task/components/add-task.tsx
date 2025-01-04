import { TaskCols, TaskType } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "motion/react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { v4 as uuidv4 } from "uuid"

type AddTaskProps = {
  column: TaskCols;
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
}

const AddTask = ({ column, setTasks }: AddTaskProps) => {
  const [text, setText] = useState<string>("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newTask: TaskType = {
      id: uuidv4(),
      title: text,
      column,
    }

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setAdding(false);
  }

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <Textarea 
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add a task..."
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <Button onClick={() => setAdding(false)} variant="secondary" size="sm">
              Close
            </Button>
            <Button type="submit" size="sm">
              Add <Plus />
            </Button>
          </div>
        </motion.form>
      ) : (
        <Button size="sm" asChild>
          <motion.button
            layout
            onClick={() => setAdding(true)}
          >
            Add Task <Plus />
          </motion.button>
        </Button>
      )}
    </>
  )
}

export default AddTask
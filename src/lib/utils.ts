import { TaskType } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { v4 as uuidv4 } from "uuid"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const DEFAULT_TASKS: TaskType[] = [
  {
    id: uuidv4(),
    title: "Arrays",
    column: "data-structures",
  },
  {
    id: uuidv4(),
    title: "Linked Lists",
    column: "data-structures"
  },
  {
    id: uuidv4(),
    title: "Stacks",
    column: "data-structures"
  },
  {
    id: uuidv4(),
    title: "Queues",
    column: "data-structures"
  },
  {
    id: uuidv4(),
    title: "Hash Tables",
    column: "data-structures"
  },
  {
    id: uuidv4(),
    title: "Merge Sort",
    column: "algorithms"
  },
  {
    id: uuidv4(),
    title: "Quick Sort",
    column: "algorithms"
  },
  {
    id: uuidv4(),
    title: "Binary Search",
    column: "algorithms"
  },
  {
    id: uuidv4(),
    title: "Two Pointers",
    column: "techniques"
  },
  {
    id: uuidv4(),
    title: "Sliding Window",
    column: "techniques"
  },
  {
    id: uuidv4(),
    title: "Greedy",
    column: "techniques"
  },
  {
    id: uuidv4(),
    title: "Dynamic Programming",
    column: "techniques"
  },
]
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

export function generateProductNumber(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = String(now.getFullYear());
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const milliseconds = String(now.getMilliseconds()).padStart(2, '0').slice(0, 2);
  
  return `${day}${month}${year}-${hours}${minutes}${seconds}${milliseconds}`;
}
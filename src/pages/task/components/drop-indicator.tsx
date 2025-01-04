import { TaskCols } from "@/types";

type DropIndicatorProps = {
  beforeId: string | null;
  column: TaskCols;
}

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div 
      data-before={beforeId}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-foreground opacity-0"
    />
  )
};

export default DropIndicator;
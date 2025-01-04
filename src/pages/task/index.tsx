import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Board from "./components/board";

export default function TaskPage() {
  return (
    <Card className="w-full min-h-full h-full flex flex-col border bg-primary-foreground text-neutral-50 rounded-lg">
      <CardHeader>
        <CardTitle>Manage Tasks</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <Board />
      </CardContent>
    </Card>
  );
}

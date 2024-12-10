import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface CardStatisticProps {
  items: {
    title?: string;
    icon?: LucideIcon;
  }
  className?: string;
}

export default function CardStatistic({ items, className }: CardStatisticProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>{items.title}</CardTitle>
        {items.icon && <items.icon className="size-4 md:size-5" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  )
}
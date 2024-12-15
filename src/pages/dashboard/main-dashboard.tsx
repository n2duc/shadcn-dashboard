import { User, DollarSign, CreditCard, Activity } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import OverviewChart from "./components/overview-chart";
import CardStatistic from "./components/card-statistic";
import LegendChart from "./components/legend-chart";
import InteractiveChart from "./components/interactive-chart";

const cardStatictisData = [
  {
    title: "Total Revenue",
    icon: DollarSign
  },
  {
    title: "Subscriptions",
    icon: User
  },
  {
    title: "Sales",
    icon: CreditCard
  },
  {
    title: "Active Now",
    icon: Activity
  }
]

export default function MainDashoard() {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <h2 className="text-base md:text-lg font-bold tracking-tight ml-1">Overview</h2>
        <Select defaultValue="today">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">3 Week</SelectItem>
            <SelectItem value="month">1 Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid auto-rows-min gap-2 mobile:grid-cols-2 lg:grid-cols-4">
        {cardStatictisData.map((item) => (
          <CardStatistic key={item.title} className="bg-sidebar rounded-lg" items={item} />
        ))}
      </div>
      <div className="min-h-[100vh] flex-1 md:min-h-min grid md:grid-cols-2 lg:grid-cols-7 gap-2">
        <OverviewChart className="md:col-span-1 lg:col-span-4 bg-sidebar rounded-lg" />
        <LegendChart className="md:col-span-1 lg:col-span-3 bg-sidebar rounded-lg" />
      </div>
      <InteractiveChart />
    </>
  )
}
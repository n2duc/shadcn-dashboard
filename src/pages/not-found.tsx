import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { BotIcon } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="w-full h-full border border-sidebar-border bg-sidebar rounded-lg flex items-center">
      <div className="w-full text-center space-y-6">
        <div className="space-y-3">
          <BotIcon className="h-24 w-24 sm:h-32 sm:w-32 text-gray-500 dark:text-gray-400 inline-block" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Oops!{" "}
            <span className="animate-bounce inline-block text-5xl sm:text-6xl">
              404
            </span>{" "}
            Page Not Found
          </h1>
          <p className="text-gray-500">
            Sorry, we couldn&#x27;t find the page you&#x27;re looking for.
          </p>
        </div>
        <Button asChild>
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}

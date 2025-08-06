import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Target, TrendingUp } from "lucide-react";

const STATS_CONFIG = [
  {
    key: "total",
    label: "Total Tasks",
    icon: Target,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    key: "completed",
    label: "Completed",
    icon: CheckCircle2,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600 dark:text-green-400",
    gradient: "from-green-500/20 to-green-500/5",
  },
  {
    key: "progress",
    label: "Progress",
    icon: TrendingUp,
    bgColor: "bg-accent",
    iconColor: "text-accent-foreground",
    gradient: "from-accent/20 to-accent/5",
  },
];

export function StatsCards({ taskCounts, completionRate }) {
  const stats = [
    { value: taskCounts.all, ...STATS_CONFIG[0] },
    { value: taskCounts.completed, ...STATS_CONFIG[1] },
    { value: `${completionRate}%`, ...STATS_CONFIG[2] },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.key}
            className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            {/* Top Accent Line */}
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.gradient
                .replace("to-", "from-")
                .replace("from-", "to-")}`}
            />

            <CardContent className="relative z-10 p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div
                  className={`p-3 ${stat.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
              </div>

              {/* Progress indicator for completion rate */}
              {stat.key === "progress" && taskCounts.all > 0 && (
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{completionRate}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.gradient
                        .replace("to-", "from-")
                        .replace("from-", "to-")} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${completionRate}%` }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

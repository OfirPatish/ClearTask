import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ListTodo, CheckCircle, Clock } from "lucide-react";
import { FILTER_CONFIG } from "@/constants";

function FilterBar({ currentFilter, onFilterChange, taskCounts }) {
  const iconMap = { ListTodo, CheckCircle, Clock };

  const filters = FILTER_CONFIG.map((filter) => ({
    ...filter,
    count: taskCounts[filter.key] || 0,
    icon: iconMap[filter.icon],
  }));

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-foreground">Filter Tasks</h3>
        <p className="text-sm text-muted-foreground">View tasks by their status</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3">
        {filters.map((filter, index) => {
          const Icon = filter.icon;
          const isActive = currentFilter === filter.key;

          return (
            <Button
              key={filter.key}
              onClick={() => onFilterChange(filter.key)}
              variant={isActive ? "default" : "outline"}
              size="lg"
              className={cn(
                "relative flex items-center gap-3 px-6 py-4 transition-all duration-300 text-sm font-medium group overflow-hidden",
                isActive
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform scale-105"
                  : "hover:bg-muted/50 hover:scale-105 border-border/50"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background effect for active state */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}

              <div className="relative z-10 flex items-center gap-3">
                <div
                  className={cn(
                    "p-2 rounded-lg transition-all duration-300",
                    isActive ? "bg-primary-foreground/20" : "bg-muted group-hover:bg-muted/80"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors duration-300",
                      isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                </div>

                <div className="flex flex-col items-start">
                  <span className="font-medium">{filter.label}</span>
                  <span
                    className={cn(
                      "text-xs transition-colors duration-300",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}
                  >
                    {filter.count} tasks
                  </span>
                </div>

                <span
                  className={cn(
                    "ml-2 px-2 py-1 rounded-full text-xs font-bold transition-all duration-300 flex-shrink-0",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:bg-muted/80 group-hover:text-foreground"
                  )}
                >
                  {filter.count}
                </span>
              </div>
            </Button>
          );
        })}
      </div>

      {/* Progress indicator */}
      {taskCounts.all > 0 && (
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted rounded-full" />
              <span>Remaining</span>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="w-full h-3 bg-muted/50 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-1000 ease-out shadow-sm"
                style={{
                  width: `${taskCounts.all > 0 ? (taskCounts.completed / taskCounts.all) * 100 : 0}%`,
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>{taskCounts.completed} completed</span>
              <span>{taskCounts.all - taskCounts.completed} remaining</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBar;

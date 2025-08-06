import TaskItem from "./TaskItem";
import { ClipboardList, CheckCircle2, Sparkles, Clock, ListTodo } from "lucide-react";
import { cn } from "@/lib/utils";
import { ANIMATION_DELAYS } from "@/constants";

function TaskList({ tasks, onToggle, onDelete, onEdit, currentFilter }) {
  if (tasks.length === 0) {
    const getEmptyState = () => {
      switch (currentFilter) {
        case "completed":
          return {
            icon: CheckCircle2,
            title: "No completed tasks",
            description: "Complete some tasks to see them here",
            iconColor: "text-green-500",
            bgColor: "from-green-50 to-green-100",
          };
        case "remaining":
          return {
            icon: Clock,
            title: "No remaining tasks",
            description: "Great job! All tasks are completed",
            iconColor: "text-blue-500",
            bgColor: "from-blue-50 to-purple-50",
          };
        default:
          return {
            icon: ClipboardList,
            title: "No tasks yet",
            description: "Start by adding your first task above. You'll be amazed at how much you can accomplish!",
            iconColor: "text-blue-500",
            bgColor: "from-blue-50 to-purple-50",
          };
      }
    };

    const emptyState = getEmptyState();
    const Icon = emptyState.icon;

    return (
      <div className="text-center py-16">
        <div className="relative mb-6">
          <div
            className={cn(
              "p-6 bg-gradient-to-br rounded-full w-24 h-24 mx-auto flex items-center justify-center",
              emptyState.bgColor
            )}
          >
            <Icon className={cn("h-12 w-12", emptyState.iconColor)} />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{emptyState.title}</h3>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">{emptyState.description}</p>
        {currentFilter === "all" && (
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4" />
              <span>Your tasks will appear here</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3 animate-in fade-in duration-500">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className="animate-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: `${index * ANIMATION_DELAYS.taskItem}ms` }}
        >
          <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;

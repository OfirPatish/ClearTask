import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Edit2, Trash2, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatTaskDate } from "@/utils/dateUtils";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.text);

  const handleEdit = () => {
    if (editValue.trim() && editValue !== task.text) {
      onEdit(task.id, editValue);
    }
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    } else if (e.key === "Escape") {
      setEditValue(task.text);
      setIsEditing(false);
    }
  };

  const startEditing = () => {
    setEditValue(task.text);
    setIsEditing(true);
  };

  return (
    <div
      className={cn(
        "group relative flex items-center gap-4 p-4 sm:p-6 bg-card/50 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] overflow-hidden",
        task.completed && "opacity-75 bg-muted/30",
        "hover:border-primary/20"
      )}
    >
      {/* Background gradient effect */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300",
          task.completed
            ? "from-green-500/5 to-green-500/10 group-hover:opacity-100"
            : "from-primary/5 to-accent/5 group-hover:opacity-100"
        )}
      />

      {/* Left accent line */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-1 transition-all duration-300",
          task.completed ? "bg-green-500" : "bg-primary group-hover:bg-accent"
        )}
      />

      <div className="relative z-10 flex items-center gap-4 w-full">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task.id)}
          className={cn(
            "h-5 w-5 data-[state=checked]:bg-primary data-[state=checked]:border-primary flex-shrink-0 transition-all duration-300",
            task.completed && "scale-110"
          )}
        />

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <Input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={handleEdit}
              className="py-2 text-base border-primary/20 focus:border-primary bg-background/50"
              autoFocus
            />
          ) : (
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "block truncate cursor-pointer text-base font-medium transition-all duration-300",
                    task.completed ? "line-through text-muted-foreground" : "text-foreground hover:text-primary"
                  )}
                  onDoubleClick={startEditing}
                >
                  {task.text}
                </span>
                {task.completed && <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />}
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{formatTaskDate(task.createdAt)}</span>
                </div>

                {task.completed && (
                  <>
                    <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <Badge
                      variant="secondary"
                      className="text-xs px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                    >
                      Completed
                    </Badge>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
          <Button
            variant="ghost"
            size="icon"
            onClick={startEditing}
            className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-all duration-200"
            title="Edit task"
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(task.id)}
            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 transition-all duration-200"
            title="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Completion animation overlay */}
      {task.completed && <div className="absolute inset-0 bg-green-500/5 rounded-xl pointer-events-none" />}
    </div>
  );
}

export default TaskItem;

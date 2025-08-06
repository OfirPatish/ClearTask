import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Add New Task</h2>
        <p className="text-muted-foreground">What would you like to accomplish today?</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative group">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter your task here..."
            className={cn(
              "h-14 text-base border-2 transition-all duration-300 bg-background/50 backdrop-blur-sm",
              isFocused
                ? "border-primary/50 shadow-lg shadow-primary/10 ring-2 ring-primary/20"
                : "border-border hover:border-primary/30 hover:shadow-md"
            )}
            autoFocus
          />

          {/* Focus indicator */}
          {isFocused && (
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 animate-pulse" />
          )}

          {/* Icon indicators */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {inputValue.trim() && <Zap className="h-4 w-4 text-accent" />}
          </div>
        </div>

        <Button
          type="submit"
          disabled={!inputValue.trim()}
          className={cn(
            "w-full h-14 text-base font-semibold transition-all duration-300 relative overflow-hidden group",
            inputValue.trim()
              ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
        >
          {/* Button background effect */}
          {inputValue.trim() && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}

          <div className="relative z-10 flex items-center justify-center gap-3">
            <Plus className="h-5 w-5" />
            <span className="hidden sm:inline">{inputValue.trim() ? "Add Task" : "Enter a task to continue"}</span>
            <span className="sm:hidden">{inputValue.trim() ? "Add" : "Enter task"}</span>
          </div>
        </Button>
      </form>

      {inputValue.trim() && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground animate-in fade-in duration-300">
            <span>Press Enter or tap the button to add your task</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskInput;

import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun className={cn("h-4 w-4 rotate-0 scale-100 transition-all", theme === "dark" && "-rotate-90 scale-0")} />
      <Moon
        className={cn("absolute h-4 w-4 rotate-90 scale-0 transition-all", theme === "dark" && "rotate-0 scale-100")}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

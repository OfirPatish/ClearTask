import { Zap, Sparkles } from "lucide-react";
import { APP_CONFIG } from "@/constants";

export function AppHeader() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg">
            <Zap className="h-8 w-8 text-primary-foreground" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
            <Sparkles className="h-2 w-2 text-accent-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            {APP_CONFIG.name}
          </h1>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Task Management</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl">
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{APP_CONFIG.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Simple & Fast</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>Smart Organization</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>Productive</span>
          </div>
        </div>
      </div>
    </div>
  );
}

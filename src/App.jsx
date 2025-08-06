import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { AppHeader } from "./components/AppHeader";
import { StatsCards } from "./components/StatsCards";
import { AppFooter } from "./components/AppFooter";
import { ThemeToggle } from "./components/ThemeToggle";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

import { useTasks } from "./hooks/useTasks";
import { useTaskFilter } from "./hooks/useTaskFilter";
import { ThemeProvider } from "./contexts/ThemeContext";

function AppContent() {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useTasks();
  const { currentFilter, setCurrentFilter, filteredTasks, taskCounts, completionRate } = useTaskFilter(tasks);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-12 max-w-5xl">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8 sm:mb-12">
          <AppHeader />
          <ThemeToggle />
        </div>

        {/* Stats Section */}
        <StatsCards taskCounts={taskCounts} completionRate={completionRate} />

        {/* Main Task Section */}
        <div className="space-y-6 sm:space-y-8">
          {/* Task Input Card */}
          <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <CardContent className="p-6 sm:p-8">
              <TaskInput onAddTask={addTask} />
            </CardContent>
          </Card>

          {/* Task List Card */}
          <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />
            <CardHeader className="pb-6 px-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Your Tasks
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Stay organized and boost your productivity</p>
                </div>
                {taskCounts.all > 0 && (
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {filteredTasks.length} of {taskCounts.all} tasks
                    </Badge>
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${(taskCounts.completed / taskCounts.all) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6 px-6 sm:px-8 pb-8">
              <FilterBar currentFilter={currentFilter} onFilterChange={setCurrentFilter} taskCounts={taskCounts} />

              <Separator className="bg-border/50" />

              <TaskList
                tasks={filteredTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
                currentFilter={currentFilter}
              />
            </CardContent>
          </Card>
        </div>

        <AppFooter />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

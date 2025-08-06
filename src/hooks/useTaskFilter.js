import { useState, useMemo } from "react";

export const FILTER_TYPES = {
  ALL: "all",
  ACTIVE: "incomplete",
  COMPLETED: "completed",
};

export function useTaskFilter(tasks) {
  const [currentFilter, setCurrentFilter] = useState(FILTER_TYPES.ALL);

  const filteredTasks = useMemo(() => {
    switch (currentFilter) {
      case FILTER_TYPES.COMPLETED:
        return tasks.filter(task => task.completed);
      case FILTER_TYPES.ACTIVE:
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, currentFilter]);

  const taskCounts = useMemo(() => ({
    all: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    incomplete: tasks.filter(task => !task.completed).length,
  }), [tasks]);

  const completionRate = useMemo(() => {
    if (tasks.length === 0) return 0;
    return Math.round((taskCounts.completed / tasks.length) * 100);
  }, [tasks.length, taskCounts.completed]);

  return {
    currentFilter,
    setCurrentFilter,
    filteredTasks,
    taskCounts,
    completionRate,
  };
} 
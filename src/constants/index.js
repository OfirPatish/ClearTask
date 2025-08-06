export const APP_CONFIG = {
  name: "ClearTask",
  description: "Organize your life, one task at a time. Stay focused and achieve more.",
  tagline: "Built with React, Vite, and Shadcn/ui",
};

export const STORAGE_KEYS = {
  tasks: "tasks",
  settings: "cleartask_settings",
};

export const ANIMATION_DELAYS = {
  taskItem: 100, // ms between each task item animation
};

export const FILTER_CONFIG = [
  {
    key: "all",
    label: "All Tasks",
    icon: "ListTodo",
  },
  {
    key: "incomplete",
    label: "Active",
    icon: "Clock",
  },
  {
    key: "completed",
    label: "Completed",
    icon: "CheckCircle",
  },
]; 
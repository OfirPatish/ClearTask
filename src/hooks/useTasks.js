import { useState, useEffect } from "react";

const STORAGE_KEY = "tasks";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Failed to parse saved tasks:", error);
        setTasks([]);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save tasks to localStorage whenever tasks change (but not on initial load)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, isInitialized]);

  const addTask = (text) => {
    if (text.trim()) {
      const newTask = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks((prev) => [...prev, newTask]);
    }
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    if (newText.trim()) {
      setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, text: newText.trim() } : task)));
    }
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  const clearAll = () => {
    setTasks([]);
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
    clearCompleted,
    clearAll,
  };
}

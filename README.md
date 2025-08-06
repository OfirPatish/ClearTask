# ✨ ClearTask - Task Tracker

A beautiful and modern task tracking application built with React and Vite.

## 🚀 Features

- **Add Tasks** - Simple input field with Enter key support
- **Edit Tasks** - Double-click to edit tasks inline
- **Delete Tasks** - One-click task removal
- **Mark Complete** - Checkbox to toggle task completion
- **Filter Tasks** - View All, Active, or Completed tasks
- **Persistent Storage** - Tasks saved to localStorage
- **Modern UI** - Clean, responsive design with ShadCN UI components

## 🛠️ Tech Stack

- **React 19** - Functional components with Hooks
- **Vite** - Fast development and build tool
- **ShadCN UI** - Beautiful and accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **localStorage** - Client-side data persistence

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/OfirPatish/ClearTask.git
cd ClearTask
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

- **Add a task**: Type in the input field and press Enter or click "Add Task"
- **Complete a task**: Click the checkbox next to any task
- **Edit a task**: Double-click on the task text to edit inline
- **Delete a task**: Click the trash icon next to any task
- **Filter tasks**: Use the filter buttons to view different task categories

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # ShadCN UI components
│   │   ├── button.jsx
│   │   ├── input.jsx
│   │   ├── card.jsx
│   │   └── ...
│   ├── TaskInput.jsx    # Task input form
│   ├── TaskList.jsx     # Task list container
│   ├── TaskItem.jsx     # Individual task component
│   ├── FilterBar.jsx    # Task filter controls
│   ├── StatsCards.jsx   # Statistics display
│   ├── AppHeader.jsx    # Application header
│   ├── AppFooter.jsx    # Application footer
│   └── ThemeToggle.jsx  # Dark/light mode toggle
├── contexts/
│   └── ThemeContext.jsx # Theme context provider
├── hooks/
│   ├── useTasks.js      # Task management hook
│   └── useTaskFilter.js # Task filtering hook
├── lib/
│   └── utils.js         # Utility functions
├── styles/
│   └── index.css        # Global styles and Tailwind imports
├── utils/
│   └── dateUtils.js     # Date utility functions
├── constants/
│   └── index.js         # Application constants
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Design Features

- Responsive design that works on all devices
- Smooth animations and transitions
- Modern gradient background
- Clean, accessible UI components
- Hover effects and visual feedback

## 🔮 Future Enhancements

- Drag and drop task reordering
- Task priorities and tags
- Due dates and reminders
- Task categories/projects
- Export/import functionality
- Cloud synchronization
- Task sharing and collaboration

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

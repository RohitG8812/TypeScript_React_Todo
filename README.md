# Todo App 🚀🎊

A feature-rich **Todo App** built with **TypeScript**, **React**, and **Vite**. The app helps you efficiently manage tasks with features like marking tasks as done, deleting tasks, clearing all tasks, and navigating between different tabs for easy task categorization. Tasks are persisted using **localStorage** to retain them even after refreshing the page.

---

## Features

1. **Add Todos**  
   - Create a new task by typing in the input field and clicking the "Add" button.

2. **Mark as Done**  
   - Use the checkbox to toggle tasks between completed and active states.

3. **Delete Tasks**  
   - Remove individual tasks by clicking the "Delete" button.

4. **Delete All Tasks**  
   - Clear all tasks at once using the "Delete All" button.

5. **Tab Navigation**  
   - View tasks by category:
     - **All**: Displays all tasks.
     - **Active**: Shows only active (incomplete) tasks.
     - **Completed**: Displays tasks marked as done.

6. **Persistent Storage**  
   - All tasks are saved in **localStorage**, so your list is available even after refreshing the page or reopening the app.

---

## Tech Stack

- **React**: Component-based UI framework.
- **TypeScript**: Ensures type safety and scalability.
- **Vite**: Fast and efficient development environment.
- **localStorage**: Persistent data storage for todos.

---

## How to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd todo-app

2. **Install node Packages**:
   ```bash
   npm install

3. **Run the Server**:
   ```bash
   npm run dev


## How It Works

- **Adding Todos:** New tasks are added to a global state managed via Context API.

- **localStorage Integration:** On every state update, the task list is synced to localStorage. When the app loads, tasks are retrieved from localStorage to restore the previous state.
  
- **Dynamic Filtering:** Tab navigation dynamically filters tasks based on their completion status.

   


## Folder Structure
```bash
src/
├── components/
│   ├── Input.tsx          # Input field for adding tasks
│   ├── DisplayTasks.tsx   # Displays and manages todos
│   ├── TabNavigation.tsx  # Tab navigation for filtering todos
├── store/
│   └── TodoContext.tsx    # Context for managing todos globally
├── App.tsx                # Main app component
├── main.tsx

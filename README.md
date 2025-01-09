# To-Do App

A simple and intuitive to-do app built with React. This app helps users manage their tasks effectively, with features like adding, editing, marking tasks as done, and deleting tasks. It also persists data using `localStorage` so that tasks are retained across browser sessions.

![Screenshot 2024-12-30 231839](https://github.com/user-attachments/assets/df38eeba-3283-415f-9cf1-0629c8bcf96b)

## Features

- **Add Task**: Users can add a new task to their to-do list.
- **Edit Task**: Edit an existing task by clicking the edit icon.
- **Mark as Done**: Mark tasks as completed using the checkbox.
- **Delete Task**: Remove tasks from the list with the delete button.
- **Data Persistence**: Tasks are saved in `localStorage` and reloaded on page refresh.

## Technologies Used

- **React**: For building the user interface.
- **UUID**: To generate unique IDs for tasks.
- **React Icons**: For intuitive and visually appealing icons.
- **CSS**: Styled using Tailwind CSS for simplicity and responsiveness.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Package manager (npm or yarn).

### Installation

1. Clone the repository:

   ```bash
   git clone [Todo-App](https://github.com/Ketulmj/Todo-App.git)
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## File Structure

- **`src/App.js`**: Contains the main logic and structure of the app.
- **`src/index.js`**: Entry point of the application.
- **`public/`**: Contains static assets like `index.html`.

## Components

### Main Components

1. **`App`**
   - Handles the main functionality of the to-do app, including state management for tasks.

### Third-Party Libraries Used

- `react-icons`: For icons such as add, edit, and delete.
- `uuid`: For generating unique IDs for tasks.

## Usage

1. Type a task into the input field.
2. Click the **Add** button to add it to your list.
3. Use the **Edit** button to update a task.
4. Check the box to mark a task as done, or click **Delete** to remove it.

## Local Storage

The app uses `localStorage` to save the state of your to-do list, ensuring that your tasks persist even if the page is refreshed or the browser is closed and reopened.

## Future Enhancements

- Add task categories.
- Implement a search or filter feature.
- Allow task prioritization.
- Add a due date and reminders.
- Create a more visually appealing UI.

## License

This project is open-source and available under the MIT License. Feel free to use and modify it as per your needs.

---

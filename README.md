
# Dev Stack Builder 🚀

Dev Stack Builder is a responsive React-based website that helps developers explore different technologies and build their ideal development stack. Users can view technology details, add technologies to their stack, remove individual items, and clear the entire stack.

## 🔗 Live Website

https://dev-stack-react-assignment-5.vercel.app/

## 📂 GitHub Repository

https://github.com/nazifa-buildscodes/dev-stack-react-assignment-5

## ✨ Features

- Explore 12 different development technologies with their icons, categories, ratings, difficulty levels, and descriptions.
- Add technologies to a personal stack with duplicate prevention.
- Remove individual technologies or clear the entire stack using the Remove All button.
- Responsive design for desktop, tablet, and mobile devices.
- Toast notifications for adding, removing, and duplicate technology attempts.
- Loading state while technology data is being loaded.

## 🛠️ Technologies Used

- React.js
- JavaScript ES6+
- Vite
- CSS3
- JSON
- React-Toastify
- React Hooks
  - useState
  - useEffect

## 📁 Project Structure

```text
src
├── assets
├── components
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── StackSidebar.jsx
│   ├── TechnologyCard.jsx
│   └── TechnologyList.jsx
├── data
│   └── technologies.json
├── App.jsx
├── index.css
└── main.jsx
```

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/nazifa-buildscodes/dev-stack-react-assignment-5

```

### 2. Go to the project folder

```bash

cd dev-stack-react-assignment-5```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Now open the local development URL in your browser.

## 🧠 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to write and understand because we can create the UI structure directly inside JavaScript.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component. Props are read-only, but state can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage state in a React component.

In this project, I used useState to manage:

- The selected technology stack
- The technology data
- The loading state

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in React components.

I used useEffect in the TechnologyList component to load the technology data from the local JSON file when the component loads.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It allows React to update, add, or remove list items efficiently without unnecessary re-rendering.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

In this project, I used conditional rendering to show an empty stack message when no technology is selected.

```jsx
{selectedStack.length === 0 ? (
  <p>Stack is empty yet.</p>
) : (
  <StackItems />
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component through props.

A child component can send information back to the parent by calling a function passed through props.

In this project, App.jsx passes selectedStack and handler functions to TechnologyList and StackSidebar.

## 👨‍💻 Author

*Nazifa Nowsin*

Built with React and Vite for Programming Hero Assignment 5.
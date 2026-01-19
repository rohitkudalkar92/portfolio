import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html'
})
export class ReactComponent implements OnInit {

  reactBasics = [
    {label: 'JavaScript Library', text: 'For building user interfaces'},
    {label: 'Component-Based', text: 'Build encapsulated components'},
    {label: 'Virtual DOM', text: 'Efficient updates and rendering'},
    {label: 'Declarative', text: 'Design simple views for each state'}
  ];

  jsxCode = `// JSX - JavaScript XML
import React from 'react';

function Welcome() {
  const name = "John";
  const isLoggedIn = true;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      {isLoggedIn && <p>Welcome back!</p>}
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}

export default Welcome;`;

  componentCode = `// Functional Component
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow Function Component
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Greeting;`;

  propsCode = `// Parent Component
import React from 'react';
import UserCard from './UserCard';

function App() {
  return (
    <div>
      <UserCard name="John" age={30} isActive={true} />
      <UserCard name="Jane" age={25} isActive={false} />
    </div>
  );
}

// Child Component
function UserCard({ name, age, isActive }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

export default App;`;

  stateCode = `// useState Hook
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;`;

  eventHandlingCode = `// Event Handling
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Hello, \${name}!\`);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;`;

  conditionalRenderingCode = `// Conditional Rendering
import React, { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Using if-else
  if (isLoggedIn) {
    return <button onClick={() => setIsLoggedIn(false)}>Logout</button>;
  } else {
    return <button onClick={() => setIsLoggedIn(true)}>Login</button>;
  }
}

// Using ternary operator
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1>}
    </div>
  );
}

// Using && operator
function Notification({ hasMessages }) {
  return (
    <div>
      {hasMessages && <p>You have new messages!</p>}
    </div>
  );
}

export default LoginButton;`;

  listRenderingCode = `// List Rendering
import React from 'react';

function TodoList() {
  const todos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy app', completed: false }
  ];

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;`;

  useEffectCode = `// useEffect Hook
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Runs after every render
    document.title = \`Timer: \${seconds}s\`;

    // Cleanup function
    return () => {
      document.title = 'React App';
    };
  }, [seconds]); // Dependency array

  useEffect(() => {
    // Runs only once on mount
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []); // Empty array = run once

  return <div>Seconds: {seconds}</div>;
}

export default Timer;`;

  formsCode = `// Controlled Forms
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;`;

  stylingCode = `// Styling in React
import React from 'react';
import './Button.css'; // External CSS

function Button() {
  // Inline styles
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px'
  };

  return (
    <div>
      {/* Inline style */}
      <button style={buttonStyle}>Inline Style</button>

      {/* CSS class */}
      <button className="btn btn-primary">CSS Class</button>

      {/* Conditional class */}
      <button className={\`btn \${isActive ? 'active' : ''}\`}>
        Conditional
      </button>
    </div>
  );
}

export default Button;`;

  hooksCode = `// Custom Hooks
import { useState, useEffect } from 'react';

// Custom Hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter name"
    />
  );
}

export default App;`;

  useContextCode = `// Context API - Share data without prop drilling
import React, { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer Component
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{ background: theme === 'light' ? '#fff' : '#333' }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}

export default ThemeProvider;`;

  useReducerCode = `// useReducer - Complex state logic
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;`;

  useMemoCode = `// useMemo - Memoize expensive calculations
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ numbers }) {
  const [count, setCount] = useState(0);

  // Without useMemo - recalculates on every render
  // const sum = numbers.reduce((a, b) => a + b, 0);

  // With useMemo - only recalculates when numbers change
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  return (
    <div>
      <p>Sum: {sum}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExpensiveComponent;`;

  useCallbackCode = `// useCallback - Memoize functions
import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Without useCallback - new function on every render
  // const addTodo = () => setTodos([...todos, 'New Todo']);

  // With useCallback - same function reference
  const addTodo = useCallback(() => {
    setTodos(prev => [...prev, 'New Todo']);
  }, []); // No dependencies

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child addTodo={addTodo} />
    </div>
  );
}

const Child = React.memo(({ addTodo }) => {
  console.log('Child rendered');
  return <button onClick={addTodo}>Add Todo</button>;
});

export default Parent;`;

  useRefCode = `// useRef - Access DOM elements and persist values
import React, { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  useEffect(() => {
    // Focus input on mount
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    // Track render count without causing re-render
    renderCount.current += 1;
  });

  return (
    <div>
      <input ref={inputRef} type="text" />
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default TextInput;`;

  apiCallsCode = `// API Calls with useEffect
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;`;

  errorBoundaryCode = `// Error Boundary - Catch errors in component tree
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default ErrorBoundary;`;

  lazyLoadingCode = `// Code Splitting & Lazy Loading
import React, { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>

      <Suspense fallback={<div>Loading profile...</div>}>
        <Profile />
      </Suspense>
    </div>
  );
}

export default App;`;

  reactMemoCode = `// React.memo - Prevent unnecessary re-renders
import React, { useState } from 'react';

// Without React.memo - re-renders on every parent update
function Child({ name }) {
  console.log('Child rendered');
  return <p>Hello, {name}!</p>;
}

// With React.memo - only re-renders when props change
const MemoizedChild = React.memo(({ name }) => {
  console.log('Memoized child rendered');
  return <p>Hello, {name}!</p>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name] = useState('John');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child name={name} /> {/* Re-renders every time */}
      <MemoizedChild name={name} /> {/* Only renders once */}
    </div>
  );
}

export default Parent;`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('React - My Notes');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

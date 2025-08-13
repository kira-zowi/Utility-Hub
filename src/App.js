import React, { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import TodoList from "./components/TodoList/TodoList";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import Home from "./pages/Home";

function App() {
  const [activeApp, setActiveApp] = useState(null);

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold fs-3"
            href="#home"
            onClick={() => setActiveApp(null)}
          >
            Utility Hub
          </a>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item mx-2">
                <button
                  type="button"
                  className={`btn nav-link fs-5 ${activeApp === 'calculator' ? 'active btn-light text-primary' : 'text-light'}`}
                  onClick={() => setActiveApp('calculator')}
                  style={{ border: 'none', background: 'none' }}
                >
                  Calculator
                </button>
              </li>
              <li className="nav-item mx-2">
                <button
                  type="button"
                  className={`btn nav-link fs-5 ${activeApp === 'todo' ? 'active btn-light text-primary' : 'text-light'}`}
                  onClick={() => setActiveApp('todo')}
                  style={{ border: 'none', background: 'none' }}
                >
                  To-Do List
                </button>
              </li>
              <li className="nav-item mx-2">
                <button 
                type="button"
                className={`btn nav-link fs-5 ${activeApp === 'weather' ? 'active btn-light text-primary' : 'text-light'}`}
                onClick={()=>setActiveApp('weather')}
                style={{border: 'none', background: 'none'}}>
                  Weather App
                </button>
              </li>
            </ul>
        </div>
      </nav>
      

      <main className="container mt-4">
        {activeApp === "calculator" && <Calculator />}
        {activeApp === "todo" && <TodoList />}
        {activeApp === "weather" && <WeatherApp />}
        {!activeApp && <Home onSelect={setActiveApp} />}
      </main>

      <footer className="text-center py-3 mt-5" style={{backgroundColor: '#33A1E0'}}>
        <p className="mb-1 text-light">&copy; 2025 Kira. All rights reserved.</p>
        <p className="text-light">Contact: <a href="mailto:zarzar076920@gmail.com">zarzar076920@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;

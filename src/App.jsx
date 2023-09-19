import React from 'react';
import './style.css';
import {
  Route, Routes, Outlet, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuote from './components/Quotes';
import Home from './components/Home';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Math Magician</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quotes" element={<DisplayQuote />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <ul className="navItems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

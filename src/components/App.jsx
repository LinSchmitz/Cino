// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function App() {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
}

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>Cino</h1>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState('');

  return (
    <input
      type="text"
      placeholder="Search movies..."
      className="search"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
}

function NumResults() {
  return <h3>NumResults</h3>;
}

function Main() {
  return (
    <main className="main">
      <ListBox />
      <WatchedBox />
    </main>
  );
}

function ListBox() {
  return <div className="box">ListBox</div>;
}

function WatchedBox() {
  return <div className="box">WatchedBox</div>;
}

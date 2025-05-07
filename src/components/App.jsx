// eslint-disable-next-line no-unused-vars
import React from 'react';

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
  return <h3>logo</h3>;
}

function Search() {
  return <h3>Search</h3>;
}

function NumResults() {
  return <h3>NumResults</h3>;
}

function Main() {
  return <main className="main">main</main>;
}

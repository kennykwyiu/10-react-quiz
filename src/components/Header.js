function Header({ children }) {
  return (
    <header className="app-header">
      <img src="logo512.png" alt="React logo" />
      <h1>{children}</h1>
    </header>
  );
}

export default Header;

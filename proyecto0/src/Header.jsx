import logo from './assets/logo-dark.jpg';

function Header() {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt='logo de la empresa' />
      <nav>
        <a href='#'>cart</a>
        <a href='#'>sign-in</a>
        <a href='#'>sing-up</a>
        <a href='#'>about us</a>
      </nav>
    </header>
  );
}

export default Header;

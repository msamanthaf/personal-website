import './Main.css';

const Web = () => {
  return (
<div className="main">
<header>
<img src="Icon.png" alt="Logo" className="logo" />
  <nav className="header-nav">
      <a href='#about' className="header-button">Profile</a>
      <a href='#portfolio' className="header-button">Portfolio</a>
      <a href='#contact' className="header-button">Contact</a>
  </nav>
</header>

</div>
  );
}

export default Web;


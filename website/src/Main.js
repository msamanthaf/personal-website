import './Main.css';
import './Scroll.js';


const Web = () => {
  return (
<div className="main">
<header>
<img src="Icon.png" alt="Logo" className="logo" />
  <nav className="header-nav">
      <a href='#profile' class="active">Profile</a>
      <a href='#portfolio'>Portfolio</a>
      <a href='#contact'>Contact</a>
  </nav>
</header>

<section id="profile">Profile</section>
<section id="portfolio">Portfolio</section>
<section id="contact">Contact</section>
<script src = "Scroll.js"></script>

</div>
  );
}

export default Web;

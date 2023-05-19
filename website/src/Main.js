import './Main.css';
import './Scroll.js'

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

<section id="profile">
  <div id="tilt"></div>
  <div class="text-box">
    <p>Hello👋 It's</p>
    <h1>MARIE</h1> 
    <h2><h3>SAM</h3> ANTHA</h2>
    <p2>Digital sorcerer in the making</p2>
  </div>
  <div className="jump">
      <a href='#portfolio' className="explore">Explore My Projects <span>&#x27F6;</span></a>
      <a href='#contact' className="connect">Connect With Me 🙌</a>
  </div>
</section>

<section id="portfolio">Portfolio</section>
<section id="contact">Contact</section>
<script src = "Scroll.js"></script>

</div>
  );
}

export default Web;

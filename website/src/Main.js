import './Main.css';
import './Scroll.js';

const Web = () => {
  return (
<div className="main">
<header>
<a href='#profile'><img src="images/Icon.png" className="logo" /></a>
  <nav className="header-nav">
      <a href='#profile' class="active">Profile</a>
      <a href='#portfolio'>Portfolio</a>
      <a href='#contact'>Contact</a>
  </nav>
</header>

<section id="profile">
  <div id="tilt">
  <div class="text-box">
    <div class="text-wrapper">
       <div class="words">
           <span class="word">Hello👋 I'm</span>
           <span class="word">Halo👋 Saya</span>
           <span class="word">你 好 呀👋 我 是</span>
           <span class="word">Hallo👋 Ich bin</span>
           <span class="word">Hello👋 I'm</span>
       </div>
    </div>
    <h1>MARIE</h1> 
    <h2><h3>SAM</h3> ANTHA</h2>
  </div>
  </div>
  <div class="desc">
    <p2>&lt;Software Sorcerer In The Making/&gt;</p2>
    <div class="fade">
      <div id="jump">
      <a href='#slider-span1' className="explore">Explore My Projects <span>&#x27F6;</span></a>
      <a href='#contact' className="connect">Connect With Me 🙌</a>
      </div>
    </div>
  </div>
  <div id='icons'>
    <a href='https://drive.google.com/file/d/18LWYla920C4FaV_P4nnHr5-viNb-3aoT/view?usp=sharing'><img src="images/resumeicon.png" className="resume" /></a>
    <a href='https://www.linkedin.com/in/marie-samantha-fidelia-82a3151b0/'><img src="images/linkedin.png" className="linkedin" /></a>
    <a href='https://github.com/msamanthaf'><img src="images/github.png" className="github" /></a>
  </div>
</section>

<section id="portfolio">
<div class="subheading hidden">
    <img src="images/subheading.png" id="head"></img>
    <p3>A glimpse of my creations</p3>
<div class="slide-container">
        <span class="slider-span" id="slider-span1"></span>
        <span class="slider-span" id="slider-span2"></span>
        <span class="slider-span" id="slider-span3"></span>
        <span class="slider-span" id="slider-span4"></span>
        <span class="slider-span" id="slider-span5"></span>

        <div class="image-slider">
            <div class="slides-div" id="slide-1">
                <img src="images/speech-less-card.png" alt="" class="img show" id="img1"></img>
                <a href="#slider-span1" class="button" id="button-1">
                <a href="https://devpost.com/software/speechless-vmrfkz" class="view-project" id="view-button"><p4 id="view-text">View &#x27F6;</p4></a>
                </a>
            </div>
            <div class="slides-div" id="slide-2">
                <img src="images/expireminder-card.png" alt="" class="img" id="img2"></img>
                <a href="#slider-span2" class="button" id="button-2">
                <a href="https://github.com/msamanthaf/Expireminder" class="view-project" id="view-button2"><p4 id="view-text2">View &#x27F6;</p4></a>
                </a>
            </div>
            <div class="slides-div" id="slide-3">
                <img src="images/dsci-card.png" alt="" class="img" id="img3"></img>
                <a href="#slider-span3" class="button" id="button-3">
                <a href="https://github.com/msamanthaf/Ad_Classification_DSCI/blob/main/Final_Project_Ad_Classification.ipynb" class="view-project" id="view-button3"><p4 id="view-text3">View &#x27F6;</p4></a>
                </a>
            </div>
            <div class="slides-div" id="slide-4">
                <img src="images/gamejam-card.png" alt="" class="img" id="img4"></img>
                <a href="#slider-span4" class="button" id="button-4">
                <a href="https://imaginary-grass.itch.io/mars-needs-gums" class="view-project" id="view-button4"><p4 id="view-text4">View &#x27F6;</p4></a>
                </a>
            </div>
            <div class="slides-div" id="slide-5">
                <img src="images/seamptoms-card.png" alt="" class="img" id="img5"></img>
                <a href="#slider-span5" class="button" id="button-5">
                <a href="https://devpost.com/software/sea-mptoms" class="view-project" id="view-button5"><p4 id="view-text5">View &#x27F6;</p4></a>
                </a>
            </div>
        </div>
    </div>
</div>
</section>

<section id="contact">
<div class="next hidden">
  <img src="images/subheading.png" id="head"></img>
  <span>What's Next?</span>
</div>
<div class="background">
  <div class="contactinner">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>Contact Me!</span>
          </div>
          <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
              <textarea class="app-form-control" placeholder="NAME"/>
              <textarea class="app-form-control" placeholder="EMAIL"/>
          </div>
              <textarea class="app-form-control message" placeholder="MESSAGE"></textarea>
          <button class="app-form-button">SEND</button>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="copyright">
  <span>© 2023 by Marie Samantha F</span>
</div>
</section>
</div>
  );
}

export default Web;
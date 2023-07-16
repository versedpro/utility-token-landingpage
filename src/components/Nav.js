import "../App.css";
import React, { useState, useEffect } from "react";
function Nav({ Tab }) {
  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer");
    const menuicon = document.getElementById("menuIcon");
    menuicon.classList.toggle("close-button");
    menu.classList.toggle("open-menu");
  }
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navClass = scrolled ? "activenav" : "";
  return (
    <>
      <div className="mobile-nav" id="mobileNavContainer">
        <div className="mobile-nav-inner">
          <a href="#home" onClick={() => toggleMenu()}>
            Home
          </a>
          <div className="divider"></div>
          <a href="#advantages" onClick={() => toggleMenu()}>
            Advantages
          </a>
          <div className="divider"></div>
          <a href="#about" onClick={() => toggleMenu()}>
            About
          </a>
          <div className="divider"></div>
          <a href="#roadmap" onClick={() => toggleMenu()}>
            Roadmap
          </a>
          <div className="divider"></div>
          <a href="#earlyaccess" onClick={() => toggleMenu()}>
            Early Access
          </a>
          <div className="divider"></div>
          <a href="#contact" onClick={() => toggleMenu()}>
            Contact
          </a>
          <div className="divider"></div>
          <a href="whitepaper.pdf" target="_blank" rel="noreferrer">
            Whitepaper
          </a>
          <div className="divider"></div>
          <a href="https://invesableai.com/">Buy Presale</a>
          <div className="divider"></div>
          <div className="social-icons">
            <a href="https://t.me/" target="_blank" rel="noreferrer">
              <img src="/assets/telegram.svg" alt="" />
            </a>
            <a href="https://discord.gg/" target="_blank" rel="noreferrer">
              <img src="/assets/discord.svg" alt="" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src="/assets/twitter.svg" alt="" />
            </a>
            <a href="https://medium.com/" target="_blank" rel="noreferrer">
              <img src="/assets/medium.svg" alt="" />
            </a>
            <a href="https://gitbook.com/" target="_blank" rel="noreferrer">
              <img src="/assets/gitbook.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="menu-button" id="menuIcon" onClick={() => toggleMenu()}>
        <div className="line-top"></div>
        <div className="line-bottom"></div>
      </div>
      <nav className={navClass}>
        <div className="nav-wrap">
          <div className="flexaudi">
            <div className="mainlogowrap">
              <img style={{ height: "50px", width: "100px" }} src="/logo.svg" className="mainlogo" alt="" />
            </div>
          </div>
          <div className="links hide-800">
            <a href="#home">Home</a>
            <a href="#advantages">Advantages</a>
            <a href="#about">About</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#earlyaccess">Early Access</a>
            <a href="#contact">Contact</a>
            <a href="whitepaper.pdf" target="_blank" rel="noreferrer">
              Whitepaper
            </a>
          </div>
          <a className="noanim hide-800" href="https://invesableai.com/" target="_blank" rel="noreferrer">
            <button className="buypresale-nav">Buy Presale</button>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;

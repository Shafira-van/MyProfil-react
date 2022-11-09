import React from "react";

function Footer() {
  return (
    <footer>
      <h3>Contact Me</h3>
      <h4>Click Under</h4>
      <div className="imgSosmed">
        <a href="https://wa.me/6281945933048">
          <img src="https://raw.githubusercontent.com/Shafira-van/MyProfil/main/img/whatsapp.png" />
          <p>Whatsapp</p>
        </a>

        <a href="https://instagram.com/shafira.van?igshid=YmMyMTA2M2Y=">
          <img src="https://raw.githubusercontent.com/Shafira-van/MyProfil/main/img/instagram.png" />
          <p>Instagram</p>
        </a>

        <a href="https://www.linkedin.com/in/shafira-van-deyli-8779381b8">
          <img src="https://raw.githubusercontent.com/Shafira-van/MyProfil/main/img/linkedin.png" />
          <p style={{ paddingLeft: "1vw" }}>Linkedin</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

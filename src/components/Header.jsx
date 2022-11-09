import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="konten">
          <div id="textHeader">
            <p>Hai, nama saya</p>
            <h1>Shafira Van Deyli</h1>
            <p>saya tertarik dalam bidang web developer</p>
          </div>
          <div id="button">
            <a
              id="button"
              href="https://github.com/Shafira-van/MyProfil/raw/main/dokumen/curicullum%20vitae.pdf"
            >
              My Curriculum Vitae
            </a>
          </div>
        </div>
        <img src="https://raw.githubusercontent.com/Shafira-van/MyProfil/main/img/me.png" />
      </div>
    </>
  );
}

export default Header;

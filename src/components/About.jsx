import React from "react";
import PropTypes from "prop-types";

function About(props) {
  return (
    <>
      <div className="about">
        <h3>About Me</h3>
        <div className="isiAbout">
          <img src="https://raw.githubusercontent.com/Shafira-van/MyProfil/main/img/me.jpg" />
          <p id="textAbout">
            Saya seorang mahasiswa semester 6 ilmu komputer Universitas Sumatera
            Utara dengan pengalaman organisasi, baik menjadi ketua maupun
            anggota yang berdampak dalam kemampuan dipimpin dan memimpin yang
            baik. Saya tertarik membangun karir di bidang Front-End Web
            Developer dan UI/UX Designer. Sikap pekerja keras, keterampilan
            komunikasi yang baik, mudah beradaptasi, mampu bekerja sama dalam
            tim serta kreatif yang dapat bermanfaat baik bagi perusahaan.
          </p>
        </div>
        <div className="more" style={{ display: props.mode }}>
          <h4>Skills</h4>
          <div id="listSkill">
            <ul>
              <li>Microsoft Office (PowerPoint, Excel, Word)</li>
              <li>
                Bahasa Pemrograman C++, PHP,Pascal, Java, JavaScript, HTML dan
                CSS
              </li>
              <li>
                Editing (Photoshop, Canva, Adobe Premier, Adobe Animate,
                Lightroom dan Picsart)
              </li>
            </ul>
          </div>
          <h4>Favorite</h4>
          <div id="listFavorite">
            <ul id="playist">
              <img src="https://p16.resso.me/img/tos-alisg-v-2102/0fa1c0df1f91491688a756cfdb5a11af~c5_500x500.jpg" />
              <a href="https://m.resso.com/ZSRXgJAu6/"> Music Playlist</a>
            </ul>
            <ul id="video">
              <img src="data:image/png;base64,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" />
              <a href="https://www.youtube.com/watch?v=mHgsVPXrMFk">
                Youtube Video
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
About.propTypes = {
  mode: PropTypes.string,
};
export default About;

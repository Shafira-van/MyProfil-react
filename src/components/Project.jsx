import React, { useState } from "react";
import PropTypes from "prop-types";

function Project(props) {
  const [project, setBlogs] = useState([
    {
      link: "https://museum-asia.netlify.app/",
      judul: "Museum Asia",
      tahun: "Oktober 2022",
      desk: "Museum Asia merupakan website untuk melihat benda benda unik yang ada di benua Asia",
    },
    {
      link: "https://shafira-movie.netlify.app/",
      judul: "Movie",
      tahun: "Oktober 2022",
      desk: "Movie merupakan website untuk melihat list film dilengkapi dengan rating",
    },
    {
      link: "https://kalkulator-bmi.netlify.app/",
      judul: "BMI Calculator",
      tahun: "Oktober 2022",
      desk: "BMI calculator merupakan website untuk menghitung index BMI untuk mengetahui apakah sudah termasuk ideal atau tidak",
    },
    {
      link: "https://shafira-profile.netlify.app/",
      judul: "My Profil",
      tahun: "Oktober 2022",
      desk: "My Profil merupakan CV dan portofolio saya yang berbentuk website",
    },
    {
      link: "",
      judul: "Jasmine's Hospital",
      tahun: "April 2022",
      desk: "Jasmine's Hospital adalah website untuk manajemen data karyawan rumah sakit",
    },
    {
      link: "",
      judul: "NARA",
      tahun: "Desember 2021",
      desk: "NARA adalah sebuah website e-commerce untuk penjualan sepatu serta sendal",
    },
    {
      link: "",
      judul: "U-Music",
      tahun: "November 2021",
      desk: "U-Music merupakan website untuk berselancar musik di desain dengan RDf untuk mendukung kemampuan dari website tersebut",
    },
    {
      link: "",
      judul: "SiPintar",
      tahun: "Juni 2021",
      desk: "SiPintar merupakan sistem manajemen informasi untuk pengumpulan data siswa yang berhak mengikuti olimpiade",
    },
    {
      link: "",
      judul: "My Coffee Shop",
      tahun: "Mei 2021",
      desk: "Coffee Shop adalah website berisi informasi toko My Coffee dimulai dari daftar menu, lokasi dan lain-lain",
    },
  ]);
  return (
    <>
      <div className="project">
        <div id="textProject">
          <h3>My Projects</h3>
          <p>Beberapa project yang telah saya kerjakan sebagai berikut</p>
        </div>
        <div id="listProject">
          <ul>
            {project.slice(props.dataAwal, props.dataAkhir).map((item, index) => (
              <li key={index}>
                <div id="projectBlog">
                  <h4>
                    <a href={item.link}>{item.judul}</a>
                  </h4>
                  <span>{item.tahun}</span>
                </div>
                <p>{item.desk}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

Project.propTypes = {
  dataAwal: PropTypes.number,
  dataAkhir: PropTypes.number,
};
export default Project;

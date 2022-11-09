import React, { useState } from "react";

function Blog(props) {
  const [blog, setBlogs] = useState([
    {
      judul: "Jurnal Pengabdian Mahasiswa",
      tahun: "Juli 2022",
      desk: "Pemanfaatan Teknologi untuk Sistem Informasi Broadcast Kegiatan Administrasi Sekolah Berbasis Aplikasi Desktop",
    },
    {
      judul:
        "Proposal PKM-K (Program Kreatifitas Mahasiswa Bidang Kewirausahaan",
      tahun: "Maret 2022",
      desk: "Aplikasi E-Commerce Sebagai Wadah Khusus Untuk Pemasaran Produk Program Kreatifitas Mahasiswa",
    },
    {
      judul:
        "Proposal PKM-RE (Program Kreatifitas Mahasiswa Bidang Riset Eksakta",
      tahun: "Maret 2022",
      desk: "Efektivitas Nanobiokoagulan dari Limbah Cangkang Kerang Lentera (Lingula unguis) sebagai Agen Pengendap Limbah Cair Industri Tahu",
    },
    {
      judul: "Summary Belajar Online Bareng Goes to Campus (BGTC) USU",
      tahun: "Juli 2021",
      desk: "Workshop Improve Your Writing Skill",
    },
    {
      judul: "Artikel Belajar Online Bareng Goes to Campus (BGTC) USU",
      tahun: "Juli 2021",
      desk: "Strategi Penjualan dan Managing Keuangan di Era 4.0",
    },
    {
      judul: "Artikel Belajar Online Bareng Goes to Campus (BGTC) USU",
      tahun: "Juli 2021",
      desk: "Being Succesful Young Entrepreneur In Digital Area",
    },
  ]);

  return (
    <>
      <div className="blog">
        <div id="textBlog">
          <h3>My Blogs</h3>
          <p>
            terkadang saya membuat karya tulis seperti jurnal, proposal
            perlombaan dan lain-lain
          </p>
        </div>
        <div id="listBlog">
          <ul>
            {blog.slice(props.dataAwal, props.dataAkhir).map((item, index) => (
              <li key={index}>
                <div id="flexBlog">
                  <h4>{item.judul}</h4>
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
export default Blog;

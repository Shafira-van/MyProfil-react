import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import About from "../components/About";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

function Home() {
  const [moreBlog, setMoreBlog] = useState(false);
  const [moreProject, setMoreProject] = useState(false);
  const [moreAbout, setMoreAbout] = useState(false);

  return (
    <div className="kontenFull">
      <Header />
      <Blog dataAwal={0} dataAkhir={3} />
      {!moreBlog && (
        <div id="more">
          <Link onClick={() => setMoreBlog(true)} to="/blog">
            More...
          </Link>
        </div>
      )}
      <Project dataAwal={0} dataAkhir={3} />
      {!moreProject && (
        <div id="more">
          <Link onClick={() => setMoreProject(true)} to="/project">
            More...
          </Link>
        </div>
      )}
      <About mode="none" />
      {!moreProject && (
        <div id="more">
          <Link onClick={() => setMoreProject(true)} to="/About">
            More...
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;

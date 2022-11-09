import { Link, useMatch, useResolvedPath} from "react-router-dom"
import React from "react";
import Home from "../Pages/HomePage";

function Navbar() {
  
  return (
    <>
    {/* <Outlet/> */}
      <nav>
        <img src="https://raw.githubusercontent.com/Shafira-van/MyProfil/main/img/me.jpg" />
        <div>
          <ul className="navText">
              <CustomLink to="/">
                Home
              </CustomLink>
              <CustomLink  to="/blog">
                Blog
              </CustomLink>
              <CustomLink  to="/project">
                Project
              </CustomLink>
              <CustomLink to="/about">
                About
              </CustomLink>
          </ul>
        </div>
      </nav>
    </>
  );
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path:resolvedPath.pathname, end:true})

  return (
    <li>
      <Link className= {isActive? "active" : ""} to={to} {...props}>
              {children}
            </Link>
    </li>
  ) 
}

export default Navbar;

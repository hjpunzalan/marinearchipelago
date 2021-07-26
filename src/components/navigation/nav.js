import React from "react";
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as classes from "./nav.module.scss"

const Nav = ({nav,toggleNav}) => (
    <nav className={classes.nav}>
      <StaticImage
        className={classes.logo}
        src="../../images/logo-white-transparentbg.png"
        placeholder="BLURRED"
        formats={["AUTO", "WEBP", "AVIF"]}
      alt="Marine Archipelago"
      onClick={()=>navigate("/")}
     />
     
     {/* HAMBURGER NAV */}
     <input
						type="checkbox"
						name="checkbox"
						id="hamburger"
						checked={nav}
						onChange={toggleNav}
					/>
						<label htmlFor="hamburger" className={classes.navButton}>
						<div><span></span></div>
     </label>
     

     <ul className={nav ? classes.navOpen : classes.navClosed}>
        <li>
         <Link
           className={classes.link}
            to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
           className={classes.link}
            to="/about">
            About us
          </Link>
       </li>
       <li>
         <Link
            className={classes.link}
            to="/contact">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  )

export default Nav

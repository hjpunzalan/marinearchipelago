import React, { useState } from "react";
import { Link } from "gatsby"
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
							<span></span>
     </label>
     

     <ul className={nav ? classes.navOpen : classes.navClosed}>
        <li>
         <Link
           className={classes.link}
            onClick={toggleNav}
            to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
           className={classes.link}
            onClick={toggleNav}
            to="/about">
            About us
          </Link>
       </li>
       <li>
         <Link
            className={classes.link}
            onClick={toggleNav}
            to="/contact">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  )

export default Nav

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as classes from "./nav.module.scss"

const Nav = () => (
    <nav className={classes.nav}>
 <StaticImage
      className={classes.logo}
      src="../../images/logo-white-transparentbg.png"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Marine Archipelago"
    />
    <div className={classes.links}>
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact us</Link>
    </div>
    </nav>
)

export default Nav

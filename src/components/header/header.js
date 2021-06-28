import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as classes from "./header.module.scss"

const Header = () => (
  <header className={classes.header}>
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
    <div className={classes.desc}>
      <h1>
        Discover world-class marine and subsea expertise
      </h1>
      <button className={classes.cta}>
        Learn more
      </button>
    </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as classes from "./header.module.scss"

const Header = () => (
  <header className={classes.header}>
 <StaticImage
      className={classes.logo}
      src="../../images/logo-black-whitebg.png"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Marine Archipelago"
    />
    <div className={classes.links}>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact us</Link>
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

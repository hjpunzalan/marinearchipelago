import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import * as classes from "./header.module.scss"

const Header = () => (
  <header>
 <StaticImage
      className={classes.logo}
      src="../../images/logo-black-whitebg.png"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Marine Archipelago"
    />
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

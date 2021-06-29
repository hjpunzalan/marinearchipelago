import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as classes from "./header.module.scss"
import Container from '../container/container'
import Nav from '../navigation/nav'

const Header = () => (
  <header className={classes.header}>
    <Container>
    <Nav/>

    <div className={classes.desc}>
      <h1>
        Discover world-class marine and subsea expertise
      </h1>
      <button className={classes.cta}>
        Learn more
      </button>
      </div>
      </Container>
</header>
)

export default Header

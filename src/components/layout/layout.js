/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Footer from "../footer/footer"
import { Helmet } from "react-helmet"

import "../../styles/_main.scss"
import * as classes from "./layout.module.scss"

const Layout = ({ children, mainClassName, nav }) => {


  return (
    <>
      <Helmet>
        <body className={nav ? classes.bodyClassNavOpen : classes.bodyClassNavClosed} />
      </Helmet>
        <main className={mainClassName}>{children}</main>
    <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

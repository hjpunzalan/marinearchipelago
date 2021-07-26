/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"


import "../styles/_main.scss"
import Footer from "./footer/footer"


const Layout = ({ children, mainClassName, nav }) => {
  if (nav) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }


  return (
    <>
        <main className={mainClassName}>{children}</main>
    <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

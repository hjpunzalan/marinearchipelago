
import * as React from "react"
import PropTypes from "prop-types"
import * as classes from "./container.module.scss"

const Container = ({ children }) => {


  return (
      <div className={classes.container}>
          {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container

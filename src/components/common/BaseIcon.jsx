import React from "react"
import propTypes from "prop-types"

const BaseIcon = props => {
  const { children, classes } = props

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  )
}

BaseIcon.propTypes = {
  children: propTypes.object.isRequired
}

export default BaseIcon

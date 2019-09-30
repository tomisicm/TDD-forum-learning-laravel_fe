import React from "react"
import propTypes from "prop-types"

const BaseIcon = props => {
  const { children, classes, onClick } = props

  return (
    <button onClick={onClick} type="button" className={classes}>
      {children}
    </button>
  )
}

BaseIcon.propTypes = {
  children: propTypes.object.isRequired,
  onClick: propTypes.func
}

export default BaseIcon

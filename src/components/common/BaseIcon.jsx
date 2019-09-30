import React from "react"
import { OverlayTrigger } from "react-bootstrap"
import propTypes from "prop-types"

// TODO: refactor
const renderTooltip = props => (
  <div
    {...props}
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      padding: "2px 10px",
      color: "white",
      borderRadius: 3,
      ...props.style
    }}
  >
    +1 add favorite
  </div>
)

const BaseIcon = props => {
  const { children, classes, onClick } = props

  return (
    <OverlayTrigger
      placement="right-start"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button onClick={onClick} type="button" className={classes} {...props}>
        {children}
      </button>
    </OverlayTrigger>
  )
}

BaseIcon.propTypes = {
  children: propTypes.object.isRequired,
  onClick: propTypes.func
}

export default BaseIcon

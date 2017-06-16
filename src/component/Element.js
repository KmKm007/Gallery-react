import React from 'react'

class Element extends React.Component {
  render () {
    const { color, position, deg } = this.props
    return (
      <div
        className="element"
        style={{
          backgroundColor: `#${color}`,
          left: position[0],
          top: position[1],
          transform: `rotate(${deg}deg)`
        }}
      >
      </div>
    )
  }
}

export default Element

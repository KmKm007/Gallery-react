import React from 'react'

class Element extends React.Component {
  createColor () {
    return parseInt(Math.random() * 999999)
  }

  createPosition () {
    const left = Math.random() * 800
    const top = Math.random() * 400
    return [left, top]
  }

  render () {
    const color = this.createColor()
    const position = this.createPosition()
    const isInitial = this.props.isInitial
    return (
      <div
        className="element"
        style={{ backgroundColor: `#${color}`, left: isInitial ? 0 : position[0], top: isInitial ? 0 : position[1] }}
      >
      </div>
    )
  }
}

export default Element

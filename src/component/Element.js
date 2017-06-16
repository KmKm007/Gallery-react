import React from 'react'
import cs from 'classnames'

class Element extends React.Component {
  render () {
    const { data, position, deg, isInverse, isCenter, handleClick } = this.props
    return (
      <div
        className={cs({
          'element': true,
          'inverse': isInverse,
          'center': isCenter
        })}
        style={{
          left: position[0],
          top: position[1],
          transform: isCenter ? '' : `rotate(${deg}deg)`
        }}
        onClick={handleClick}
      >
        <div className="front">
          <div>
            <img src={require(`../images/${data.fileName}`)}/>
          </div>
          <div>
            {data.title}
          </div>
        </div>
        <div className="back">
            {data.desc}
        </div>
      </div>
    )
  }
}

export default Element

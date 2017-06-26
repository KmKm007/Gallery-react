import React from 'react'
import cs from 'classnames'

class Element extends React.Component {
  render () {
    const { data, index, position, deg, isInverse, isCenter, handleClick } = this.props
    return (
      <div
        className={cs({
          'element': true,
          'inverse': isInverse,
          'center': isCenter
        })}
        style={{
          left: position[0] + 'px',
          top: position[1] + 'px',
          transform: isCenter ? '' : `rotate(${deg}deg)`
        }}
        onClick={() => handleClick(index)}
      >
        <div className="front">
          <div>
            <img src={require(`../images/${data.fileName}`)}/>
          </div>
          <div className="front-title">
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

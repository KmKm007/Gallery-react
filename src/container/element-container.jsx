import React from 'react'
import PropTypes from 'prop-types'
import Element from '../component/Element'

class ElementContainer extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    positions: PropTypes.array.isRequired,
    degs: PropTypes.array.isRequired,
    isInverses: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
  }

  render () {
    const { data, positions, degs, isInverses, activeIndex, handleClick } = this.props
    const amount = data.length
    const elements = []
    for (let i = 0; i < amount; i++) {
      elements.push((
        <Element
          position={positions[i]}
          data={data[i]}
          deg={degs[i]}
          key={i}
          index={i}
          handleClick={handleClick}
          isInverse={isInverses[i]}
          isCenter={activeIndex === i}
        />
      ))
    }
    return (
      <div>
        {elements}
      </div>
    )
  }
}

export default ElementContainer

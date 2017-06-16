import React from 'react'
import Element from '../component/Element'
import Nav from './Nav'
import '../styles/gallery.css'

class GalleryApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isInitial: true,
      data: null,
      positions: null,
      degs: null,
      isInverses: null,
      amount: 10,
      activeIndex: 0
    }
  }

  componentWillMount () {
    this.initial(this.state.amount)
  }

  componentDidMount () {
    const container = this.refs.container
    const width = container.scrollWidth
    const height = container.scrollHeight
    this.Constant = {
      width,
      height
    }
    setTimeout(this.reverse.bind(this), 0)
  }

  componentDidUpdate (prePrps, preState) {
    if (preState.activeIndex !== this.state.activeIndex) {
      this.reverse()
    }
  }

  initial (amount = 10) {
    const data = this.getData()
    const positions = this.getPostions()
    const degs = this.getDegs()
    const isInverses = this.getInverse()
    this.setState({
      data,
      positions,
      degs,
      isInverses
    })
  }

  createPosition () {
    const left = Math.random() * 800
    const top = Math.random() * 400
    return [left, top]
  }

  createDeg () {
    const deg = Math.random() * 60 - 30
    return deg
  }

  getPostions (isInitial = true) {
    const { amount, activeIndex } = this.state
    const createPosition = this.createPosition
    const positions = []
    for (let i = 0; i < amount; i++) {
      if (isInitial) {
        positions.push([0, 0])
      } else if (activeIndex === i) {
        positions.push([this.Constant.width / 2 - 150, this.Constant.height / 2 - 160])
      } else {
        positions.push(createPosition())
      }
    }
    return positions
  }

  getData () {
    const data = require('../data/imageDatas.json')
    return data
  }

  getDegs (isinitial = true) {
    const amount = this.state.amount
    const createDeg = this.createDeg
    const degs = []
    if (!isinitial) {
      for (let i = 0; i < amount; i++) {
        degs.push(createDeg())
      }
    } else {
      for (let i = 0; i < amount; i++) {
        degs.push(0)
      }
    }
    return degs
  }

  getInverse () {
    const amount = this.state.amount
    const isInverses = []
    for (let i = 0; i < amount; i++) {
      isInverses.push(false)
    }
    return isInverses
  }

  onIndexChange = index => {
    const activeIndex = this.state.activeIndex
    if (activeIndex === index) {
      const isInverses = [ ...this.state.isInverses ]
      isInverses[index] = !isInverses[index]
      this.setState({
        isInverses
      })
    } else {
      this.setState({
        activeIndex: index
      })
    }
  }

  // 重新布局
  reverse () {
    const positions = this.getPostions(false)
    const degs = this.getDegs(false)
    this.setState({
      positions,
      degs
    })
  }

  render () {
    const { amount, data, positions, degs, isInverses, activeIndex } = this.state
    let elements = []
    for (let i = 0; i < amount; i++) {
      elements.push((
        <Element
          position={positions[i]}
          data={data[i]}
          deg={degs[i]}
          key={i}
          index={i}
          handleClick={this.onIndexChange.bind(this, i)}
          isInverse={isInverses[i]}
          isCenter={activeIndex === i}
        />
      ))
    }
    const content = elements ? (
      <div className="container" ref="container">
        {elements}
        <Nav
          amount={amount}
          activeIndex={activeIndex}
          handleIndexChange={this.onIndexChange}
        />
      </div>
    ) : null
    return content
  }
}

export default GalleryApp

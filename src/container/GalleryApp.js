import React from 'react'
import ElementContainer from './element-container'
import Nav from './Nav'
import { getRandom } from '../utils/MathUtil'
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
      amount: 16,
      activeIndex: 0
    }
  }

  static defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight,
    eleWidth: 320,
    eleHeight: 360
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
    const { width, height, eleWidth, eleHeight } = this.props
    const halfWidth = width / 2
    const halfHeight = height / 2
    const halfEleWidth = eleWidth / 2
    const halfEleHeight = eleHeight / 2
    let poiX = parseInt(getRandom(0, width))
    let poiY
    if (poiX > (halfWidth - eleWidth) && poiX < (halfWidth + eleWidth)) {
      poiY = getRandom(0, halfHeight - eleHeight)
    } else {
      poiY = parseInt(getRandom(0, height))
    }
    return [poiX - halfEleWidth, poiY - halfEleHeight]
  }

  createDeg () {
    const deg = Math.random() * 60 - 30
    return deg
  }

  getPostions (isInitial = true) {
    const { amount, activeIndex } = this.state
    const createPosition = this.createPosition.bind(this)
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
      const isInverses = this.getInverse()
      this.setState({
        activeIndex: index,
        isInverses
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
    const content = (
      <div className="container" ref="container">
        <ElementContainer
          positions={positions}
          data={data}
          degs={degs}
          handleClick={this.onIndexChange}
          isInverses={isInverses}
          activeIndex={activeIndex}
        />
        <Nav
          amount={amount}
          activeIndex={activeIndex}
          handleIndexChange={this.onIndexChange}
        />
      </div>
    )
    return content
  }
}

export default GalleryApp

import React from 'react'
import Element from '../component/Element'
import Nav from './Nav'
import '../styles/gallery.css'

class GalleryApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isInitial: true,
      colors: null,
      positions: null,
      degs: null,
      amount: 10
    }
  }

  componentWillMount () {
    this.initial(this.state.amount)
  }

  componentDidMount () {
    const positions = this.getPostions(false)
    const degs = this.getDegs(false)
    setTimeout(() => {
      this.setState({
        positions,
        degs
      })
    }, 0)
  }

  initial (amount = 10) {
    const colors = this.getColors()
    const positions = this.getPostions()
    const degs = this.getDegs()
    this.setState({
      colors,
      positions,
      degs
    })
  }

  createColor () {
    return parseInt(Math.random() * 999999)
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
    const amount = this.state.amount
    const createPosition = this.createPosition
    const positions = []
    if (!isInitial) {
      for (let i = 0; i < amount; i++) {
        positions.push(createPosition())
      }
    } else {
      for (let i = 0; i < amount; i++) {
        positions.push([0, 0])
      }
    }
    return positions
  }

  getColors () {
    const amount = this.state.amount
    const createColor = this.createColor
    const colors = []
    for (let i = 0; i < amount; i++) {
      colors.push(createColor())
    }
    return colors
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

  render () {
    const { amount, colors, positions, degs } = this.state
    let elements = []
    for (let i = 0; i < amount; i++) {
      elements.push(<Element color={colors[i]} position={positions[i]} deg={degs[i]} key={i}/>)
    }
    const content = elements ? (
      <div className="container">
        {elements}
        <Nav amount={amount}/>
      </div>
    ) : null
    return content
  }
}

export default GalleryApp

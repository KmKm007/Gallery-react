import React from 'react'
import Element from '../component/Element'
import '../styles/gallery.css'

class GalleryApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      elements: null,
      isInitial: true
    }
  }

  createElements (amount = 10) {
    const divs = []
    for (let i = 0; i < amount; i++) {
      divs.push(<Element key={i} index={i} />)
    }
    return divs
  }

  componentWillMount () {
    if (!this.state.elements) {
      this.setState({
        elements: this.createElements(10)
      })
    }
  }

  render () {
    const elements = this.state.elements
    const content = elements ? (
      <div className="container">
        {elements.map(e => {
          return e
        })}
      </div>
    ) : null
    return content
  }
}

export default GalleryApp

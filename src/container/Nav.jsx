import React from 'react'

class Nav extends React.Component {
  render () {
    const amount = this.props.amount
    const navItems = []
    for (let i = 0; i < amount; i++) {
      navItems.push((
        <span className="nav-item" key={i}></span>
      ))
    }
    return (
      <div className="nav">

      </div>
    )
  }
}

export default Nav

import React from 'react'
import NavItem from '../component/NavItem'

class Nav extends React.Component {
  render () {
    const { amount, activeIndex, handleIndexChange } = this.props
    const navItems = []
    for (let i = 0; i < amount; i++) {
      navItems.push((
        <NavItem
          key={i}
          isActive={activeIndex === i}
          handleClick={ () => handleIndexChange(i) }
        />
      ))
    }
    return (
      <div className="nav">
        {navItems}
      </div>
    )
  }
}

export default Nav

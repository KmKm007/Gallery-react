import React from 'react'
import cs from 'classnames'

const NavItem = ({ isActive, handleClick }) => {
  return (
    <span
      className={cs({
        'nav-item': true,
        'nav-item-active': isActive
      })}
      onClick={handleClick}
      />
  )
}

export default NavItem

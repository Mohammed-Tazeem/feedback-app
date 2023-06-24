import React from 'react'

function Header({text, bgColor,textColor}) {
  const headerStyles = {
    backgrounColor: bgColor,
    color:textColor
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
        
      </div>
    </header>
  )
}

Header.defaultProps = {
  text:'Rating & Feedback Portal',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

export default Header
import React from 'react'
import PropTypes from 'prop-types'

function Button({children,version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version:'primary',
    type:'button',
    isDisabled:false
}

Button.propTypes={
    version:PropTypes.string,
    children:PropTypes.node.isRequired,
    type:PropTypes.string,
    isDisabled:PropTypes.bool,
}
export default Button
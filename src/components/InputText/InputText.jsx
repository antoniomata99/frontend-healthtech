import React from 'react'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/globals/Input.scss'

const InputText = ({ placeholder, setData }) => {
  return (
    <input
      className='Input'
      type='text'
      placeholder={placeholder}
      required
      onChange={(e) => setData(e.target.value)}
    />
  )
}

InputText.defaultProps = {
  placeholder: 'Input Test',
  setData: null,
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  setData: PropTypes.func,
}

export { InputText }

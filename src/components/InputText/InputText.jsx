import React from 'react'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/globals/Input.scss'

const InputText = ({ placeholder, setData, defaultValue }) => {
  return (
    <input
      className='Input'
      type='text'
      placeholder={placeholder}
      required
      onChange={(e) => setData(e.target.value)}
      value={defaultValue}
    />
  )
}

InputText.defaultProps = {
  placeholder: 'Input Test',
  setData: null,
  defaultValue: '',
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  setData: PropTypes.func,
  defaultValue: PropTypes.string,
}

export { InputText }

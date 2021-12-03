import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/globals/Input.scss'

const InputText = ({ placeholder, setData, defaultValue, type }) => {
  return (
    <input
      className='Input'
      type={type}
      placeholder={placeholder}
      required
      onChange={setData ? (e) => setData(e.target.value) : ''}
      value={defaultValue && defaultValue}
    />
  )
}

InputText.defaultProps = {
  placeholder: 'Input Test',
  setData: null,
  defaultValue: '',
  type: 'text',
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  setData: PropTypes.func,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
}

export { InputText }

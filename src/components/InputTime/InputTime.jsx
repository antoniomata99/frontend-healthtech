import React from 'react'
import PropTypes from 'prop-types'
// * Style
import '../../styles/globals/Input.scss'

const InputTime = ({ setData, defaultValue }) => {
  return (
    <input
      className='Input'
      type='time'
      min='06:00'
      max='20:00'
      required
      onChange={(e) => setData(e.target.value)}
      value={defaultValue}
    />
  )
}

InputTime.defaultProps = {
  setData: null,
  defaultValue: '',
}

InputTime.propTypes = {
  setData: PropTypes.func,
  defaultValue: PropTypes.string,
}

export { InputTime }

import React from 'react'
import PropTypes from 'prop-types'
// * Style
import '../../styles/globals/Input.scss'

const InputTime = () => <input className='Input' type='time' min='06:00' max='20:00' required />

InputTime.defaultProps = {}

InputTime.propTypes = {}

export { InputTime }

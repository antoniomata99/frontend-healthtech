import React from 'react'
import PropTypes from 'prop-types'
// * Style
import '../../styles/components/Message.scss'

const Message = ({ text, modifier }) => <h1 className={`Message Message--${modifier}`}>{text}</h1>

Message.defaultProps = {
  text: 'Hello World',
  modifier: '',
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  modifier: PropTypes.string,
}

export { Message }

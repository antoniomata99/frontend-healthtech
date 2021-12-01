import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import '@styles/components/Message.scss'

const Message = ({ text, modifier, state }) => {
  const [showMessage, setShowMessage] = useState(state)

  const toggleMessage = () => {
    setShowMessage(!showMessage) // ! Delete message
  }

  return (
    <>
      {showMessage && (
        <div className='Message'>
          <h1 className={`Message__Text Message__Text--${modifier}`}>{text}</h1>
          <button
            className={`Message__Button Message__Button--${modifier}`}
            onClick={toggleMessage}
          >
            <AiOutlineCheckCircle />
          </button>
        </div>
      )}
    </>
  )
}

Message.defaultProps = {
  text: 'Hello World',
  modifier: '',
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  modifier: PropTypes.string,
}

export { Message }

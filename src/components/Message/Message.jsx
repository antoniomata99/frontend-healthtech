import React, { useState } from 'react'
import PropTypes from 'prop-types'
// * Style
import '../../styles/components/Message.scss'
//  * Icons
import { AiOutlineCheckCircle } from 'react-icons/ai'

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

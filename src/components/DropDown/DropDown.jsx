import React from 'react'
import PropTypes from 'prop-types'
// * Styles
import '../../styles/globals/Button.scss'

const DropDown = ({ defaultOption, options, setData }) => {
  return (
    <select
      className='Input Input--dropDown'
      name={defaultOption}
      onChange={(e) => setData(e.target.value)}
      required
    >
      <option value='' selected disabled>
        {defaultOption}
      </option>
      {options.map((item) => (
        <option value={item.value} key={item.id}>
          {`${item.value}`}
        </option>
      ))}
    </select>
  )
}

DropDown.defaultProps = {
  defaultOption: '',
  options: [],
  setData: null,
}

DropDown.propTypes = {
  defaultOption: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  setData: PropTypes.func,
}

export { DropDown }

import React from 'react'
// * Styles
import '../../styles/globals/Button.scss'

const DropDown = ({ defaultOption, options }) => {
  return (
    <select
      className='Input Input--dropDown'
      name={defaultOption}
      onChange={() => console.log('a')}
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

export { DropDown }

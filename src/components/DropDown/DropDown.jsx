import React from 'react'
import './DropDown.scss'

const DropDown = ({ name = '', options = [] }) => {
  return (
    <select className='DropDown' name={name} id={name} onChange={() => console.log('a')} required>
      <option className='DropDown__value' value='' selected disabled>
        {name}
      </option>
      {options.map((item) => (
        <option className='DropDown__value' value={item.value} key={item.id}>
          {`${item.value}`}
        </option>
      ))}
    </select>
  )
}

export { DropDown }

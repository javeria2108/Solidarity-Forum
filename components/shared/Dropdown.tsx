import React from 'react'

type dropDownProps={
    value?: string
    onChangeHandler?:()=>void
}
const Dropdown = ({value, onChangeHandler}: dropDownProps)  => {
  return (
    <div>Dropdown</div>
  )
}

export default Dropdown
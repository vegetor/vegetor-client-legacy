import React from 'react'

type Props = {

}

const InputCheckbox: React.FC<Props> = ({ children }) => (
  <input type="checkbox">{ children }</input>
)

export default InputCheckbox

import React from 'react'

type Props = {

}

const InputText: React.FC<Props> = ({ children }) => (
  <input type="text">{ children }</input>
)

export default InputText

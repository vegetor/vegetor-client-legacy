import React from 'react'
import tw from 'twin.macro'


type Props = {
}

const InputNumber: React.FC<Props> = ({ children }) => (
  <input type="number">{ children }</input>
)

export default InputNumber

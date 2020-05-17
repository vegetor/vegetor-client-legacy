import React from 'react'

type Props = {

}

const Checkbox: React.FC<Props> = ({ children }) => (
  <input type="checkbox">{ children }</input>
)

export default Checkbox

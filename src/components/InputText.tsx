import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

import CheckImg from '../assets/images/ic-check-primary.svg'

type Props = {

}

const Container = styled.div`
  ${ tw`flex items-center justify-between w-full h-full p-1` };
  box-shadow: inset 0 -1px 0 0 rgba(164, 164, 164, 0.5);
  background-color: #ffffff;
`

const Input = styled.input`
  ${ tw`w-10/12 h-full` };
`

const InputText: React.FC<Props> = ({ children }) => (
  <Container>
    <Input type="text">{ children }</Input>
    <img src={ CheckImg } alt="체크 이미지" />
  </Container>
)

export default InputText

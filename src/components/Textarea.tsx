import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

type Props = {


}

const Container = styled.div`
  ${ tw`w-full h-full p-1` };
`

const Input = styled.textarea``

const Textarea: React.FC<Props> = ({ children }) => (
  <Container>
    <Input>{ children }</Input>
  </Container>
)

export default Textarea

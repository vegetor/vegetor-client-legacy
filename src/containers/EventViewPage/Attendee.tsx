import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

type Props = {
  count: number;
}

const Container = styled.div`
  ${ tw`flex justify-end items-center pb-4 mt-8` };
  p {
    font-family: NotoSansCJKkr;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
  }
`

const Attendee: React.FC<Props> = ({ count }) => (
  <Container>
    <p>{ `${ count }명 참여신청` }</p>
  </Container>
)

export default Attendee

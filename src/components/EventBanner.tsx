import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import { useHistory } from 'react-router-dom'

import { Button } from '../components'

type Props = {
  bgUrl: string;
  title: string;
}

const Container = styled.div<{ bgUrl: string; }>`
  ${ tw`w-full h-64 bg-no-repeat bg-cover relative` };
  height: 360px;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: ${({ bgUrl }) => `url(${ bgUrl })`};
`

const Title = styled.h2`
  ${ tw`absolute w-10/12` };
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  font-family: BMJUAOTF;
  font-size: 30px;
  line-height: 1.27;
  color: #ffffff;
`

const StyledButton = styled(Button)`
  ${ tw`absolute w-10/12` };
  left: 50%;
  transform: translateX(-50%);
  bottom: 16px;
`

const EventBanner: React.FC<Props> = ({ bgUrl, title }) => {
  const history = useHistory()

  return (
    <Container bgUrl={ bgUrl }>
      <Title>{ title }</Title>
      <StyledButton primary onClick={() => history.push('/event/host') }>이벤트 주최하기</StyledButton>
    </Container>
  )
}

export default EventBanner

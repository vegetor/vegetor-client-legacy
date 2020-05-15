import React, {ReactNode} from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

interface Props {
  target: Element | null;
}

const Wrapper = styled.div`
  ${ tw`fixed z-50 w-2/4 h-screen` };
  top: 0;
  left: 0;
  background-color: #ffffff;
  @keyframes slideInLeft {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    50% {
      opacity: 0.35;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  animation: slideInLeft 0.3s;
`

const Overlay: React.FC<Props> = ({ children, target }) => (
  target && ReactDOM.createPortal(<Wrapper>{ children }</Wrapper>, target)
)

export default Overlay


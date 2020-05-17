import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import {TransitionStatus} from "react-transition-group/Transition";

interface Props {
  target: Element | null;
  visible: boolean;
  status: TransitionStatus;
}

const Wrapper = styled.div<{ status: TransitionStatus; visible: boolean; }>`
  ${ tw`fixed z-50 w-2/4 h-screen` };
  top: 0;
  left: 0;
  background-color: #ffffff;
  @keyframes slide-in-left {
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
  transition-timing-function: ${({ status }) => status === 'entered' ? 'ease-in-out' : '' };
  animation: ${({ status }) => status === 'entered' ? 'slide-in-left 0.2s' : 'none' };
`

const Overlay: React.FC<Props> = ({ visible, status, children, target }) => (
  target && ReactDOM.createPortal(<Wrapper visible={ visible } status={ status }>{ children }</Wrapper>, target)
)

export default Overlay


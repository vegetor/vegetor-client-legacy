import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

type Props = {
  target: Element | null;
  active: boolean;
}

const Container = styled.div<{ active: boolean; }>`
  ${ tw`w-full fixed min-h-screen z-10` };
  background-color: rgba(0,0,0,.5);
  top: 0;
  display: ${({ active }) => active ? 'block' : 'none' };
`
const Dimmed: React.FC<Props> = ({ active, target  }) => (
  target && ReactDOM.createPortal(<Container active={ active } />, target)
)

export default Dimmed

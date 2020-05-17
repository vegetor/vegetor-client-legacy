import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import { useHistory } from 'react-router-dom'

type Props = {
  steps: { id: number; label: string; active: boolean; linkUrl: string }[];
}

const List = styled.ul`
  ${ tw`flex justify-between w-full h-full` };
`

const ListItem = styled.li<{ active: boolean; }>`
  font-weight: ${({ active }) => active ? 'bold': 'normal' };
  opacity: ${({ active }) => active ? 1 : 0.6 };
  white-space: nowrap;
  &::after {
    content: '>';
    padding-left: 8px;
  }
`

const BreadCrumb: React.FC<Props> = ({ steps }) => {
  const history = useHistory()

  return (
    <List>
      {
        steps.map((step, index) => (
          <ListItem key={ step.id } active={ step.active } onClick={ () => history.push(step.linkUrl)}>
            { `${ index + 1 }. ${ step.label }` }
          </ListItem>
        ))
      }
    </List>
  )
}

export default BreadCrumb

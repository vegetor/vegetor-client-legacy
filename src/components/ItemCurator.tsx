import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

type Props = {
  items: { id: number; bgUrl: string; name: string; }[];
}

const Container = styled.div`

`

const List = styled.ul`
  ${ tw`flex flex-no-wrap p-4` };
  overflow-x: auto;
  scroll-behavior: smooth;
  li + li {
    ${ tw`ml-8` };
  }
`

const ListItem = styled.li<{ bgUrl: string; }>`
  flex: 0 0 auto;
  width: 150px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 5px -1px rgba(0, 0, 0, 0.12), 0 1px 10px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  background-image: ${({ bgUrl }) => `url(${ bgUrl })`};
  background-repeat: no-repeat;
  background-size: cover;
  font-family: BMJUAOTF;
  font-size: 16px;
  color: #fff;
`

const ItemCurator: React.FC<Props> = ({ items }) => (
  <Container>
    <List>
      {
        items.map(({ id, bgUrl, name }) => <ListItem key={ id } bgUrl={ bgUrl }>{ name }</ListItem>)
      }
    </List>
  </Container>
)

export default ItemCurator

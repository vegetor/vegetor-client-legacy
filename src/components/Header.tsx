import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

import { useDrawer } from '../hooks'

import HamburgerBtn from '../assets/images/ic-drawer.svg'
import Drawer from "./Drawer";
import Dimmed from "./Dimmed";
import {Transition} from "react-transition-group";

type Props = {
  authorized: boolean;
  userThumbnailImage?: string;
}

const Container = styled.header`
  ${ tw`w-full flex items-center sticky` };
  top: 0;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  padding: 0 19px;
  z-index: 10;
`

const Title = styled.h1`
  font-family: BMJUAOTF;
  font-size: 18px;
  color: #ffffff;
`

const LoginButton = styled.a`
  width: 40px;
  height: 22px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  line-height: 1.57;
  color: #ffffff;
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`

const Header: React.FC<Props> = ({ authorized, userThumbnailImage }) => {
  const [visible, open, close ] = useDrawer()

  return (
    <Container>
      <img src={ HamburgerBtn } alt="drawer" onClick={ open } />
      {
        visible && (
          <Transition in={ visible } timeout={ 0 }>
            {(status) => <Drawer visible={ visible } target={ document.getElementById('drawer') } close={ close } status={ status } />}
          </Transition>
        )
      }
      <Dimmed target={ document.getElementById('dim') } active={ visible } close={ close } />
      <a href="/" rel="noreferrer noopener">
        <Title>VEGETOR</Title>
      </a>
      { authorized ? <LoginButton>
        <img src={ userThumbnailImage } alt="유저 이미지" />
      </LoginButton> : <LoginButton href="/login" rel="noreferrer noopener">로그인</LoginButton> }
    </Container>
  )
}

export default React.memo(Header)

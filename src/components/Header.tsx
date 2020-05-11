import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

import HamburgerBtn from '../assets/images/ic-drawer.svg'

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
  return (
    <Container>
      <img src={ HamburgerBtn } alt="drawer" />
      <a href="/" rel="noreferrer noopener">
        <Title>VEGETOR</Title>
      </a>
      { authorized ? <LoginButton>
        <img src={ userThumbnailImage } alt="유저 이미지" />
      </LoginButton> : <LoginButton href="/login" rel="noreferrer noopener">로그인</LoginButton> }
    </Container>
  )
}

export default Header

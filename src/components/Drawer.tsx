import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import {useTheme} from "emotion-theming";
import { Link } from 'react-router-dom'

import CloseImg from '../assets/images/ic-close-24-black-inactive.svg'
import Overlay from './Overlay'
import {Theme} from "./Theme";

type Props = {
  theme?: Theme;
  target: Element | null;
  close: () => void;
}

const Container = styled.div`
  ${ tw`p-4 transition duration-500 ease-in-out ` };
`

const Header = styled.div`
  ${ tw`flex justify-end` };
`

const Nav = styled.nav<{ activeColor: string; }>`
  ul > li {
    ${ tw`flex` };
    font-weight: bold;
    font-size: 18px;
    padding: 24px 12px;
    &:active {
      background-color: ${({ activeColor }) => activeColor};
    }
  }
  li > a {
    ${ tw`w-full h-full self-stretch` };
  }
`

const Drawer: React.FC<Props> = ({ target, close }) => {
  const theme: Theme = useTheme()

  return (
    <Overlay target={ target }>
      <Container>
        <Header>
          <img src={ CloseImg } alt="닫기" onClick={ close } />
        </Header>
        <Nav activeColor={ theme.colors.gray?.[400] }>
          <ul>
            <li>
              <Link to="/">이벤트</Link>
            </li>
            <li>
              <Link to="/place">장소</Link>
            </li>
            <li>
              <Link to="/people">인물</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/helpdesk">HelpDesk</Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </Overlay>
  )
}

export default Drawer

import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import {useTheme} from "emotion-theming";
import { Link } from 'react-router-dom'

import CloseImg from '../assets/images/ic-close-24-black-inactive.svg'
import Overlay from './Overlay'
import {Theme} from "./Theme";
import {TransitionStatus} from "react-transition-group/Transition";

type Props = {
  theme?: Theme;
  target: Element | null;
  status: TransitionStatus;
  visible: boolean;
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

const Drawer: React.FC<Props> = ({ status, target, close, visible }) => {
  const theme: Theme = useTheme()

  const routes = [
    {
      id: 0,
      menuName: '이벤트',
      path: '/'
    },
    {
      id: 1,
      menuName: '장소',
      path: '/place'
    },
    {
      id: 2,
      menuName: '채식 요리법',
      path: '/recipe'
    },
    {
      id: 3,
      menuName: '인물',
      path: '/people'
    },
    {
      id: 4,
      menuName: 'About',
      path: '/about'
    },
    {
      id: 5,
      menuName: 'HelpDesk',
      path: '/helpdesk'
    }
  ]

  return (
    <Overlay target={ target } status={ status } visible={ visible }>
      <Container>
        <Header>
          <img src={ CloseImg } alt="닫기" onClick={ close } />
        </Header>
        <Nav activeColor={ theme.colors.gray?.[400] }>
          <ul>
            {
              routes.map(({ id, menuName, path }) => (
                <li key={ id }>
                  <Link to={ path } onClick={ close }>{ menuName }</Link>
                </li>
              ))
            }
          </ul>
        </Nav>
      </Container>
    </Overlay>
  )
}

export default Drawer

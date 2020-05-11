import React from 'react'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

import { Theme } from './Theme'

type Props = {}

const StyledFooter = styled.footer<{ bgColor: string; color: string; }>`
  ${ tw`p-4 border-t` };
  height: 180px;
  color: ${({ color }) => `${ color }`};
  background-color: ${({ bgColor }) => `${ bgColor }`};
`

const Logo = styled.h2`
  ${ tw`font-bold` };
  font-size: 14px;
`

const ContentWrapper = styled.div`
  ${ tw`h-full flex flex-col justify-between` };
  font-size: 12px;
`

const Nav = styled.nav`
  ${ tw`w-7/12` };
  ul {
    ${ tw`flex justify-between` };
    li {
      white-space: nowrap;
    }
  }
`

const Footer: React.FC<Props> = () => {
  const theme: Theme = useTheme()

  return (
    <StyledFooter bgColor={ theme.colors.gray?.[200] } color={ theme.colors.gray?.[800] }>
      <ContentWrapper>
        <Logo>VEGETOR</Logo>
        <Nav>
          <ul>
            <li>
              헬프 데스크
            </li>
            <li>
              이용약관
            </li>
            <li>
              개인정보보호정
            </li>
          </ul>
        </Nav>
        <div>
          <p>
            이메일: tlsehdfl@naver.com
          </p>
          <p>
            대표 전화: 010-9204-5680
          </p>
        </div>
      </ContentWrapper>
    </StyledFooter>
  )
}

export default Footer

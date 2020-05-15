import React from 'react'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

import { Theme } from './Theme'

type Props = {}

const StyledFooter = styled.footer<{ bgColor: string; color: string; }>`
  ${ tw`p-4 border-t-2` };
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

const Nav = styled.nav<{ divColor: string; }>`
  ${ tw`w-7/12 h-6` };
  ul {
    ${ tw`flex items-center h-full` };
    > li {
      ${ tw`whitespace-no-wrap` };
      border-right: 1px solid ${({ divColor }) => `${ divColor }`};
      padding: 0 6px;
      &:first-of-type {
        padding: 0 6px 0 0;
      }
      &:last-child {
        border-right: 0;
        padding: 0 0 0 6px;
      }
    }
  }
`

const Footer: React.FC<Props> = () => {
  const theme: Theme = useTheme()

  return (
    <StyledFooter bgColor={ theme.colors.gray?.[200] } color={ theme.colors.gray?.[800] }>
      <ContentWrapper>
        <Logo>VEGETOR</Logo>
        <Nav divColor={ theme.colors.gray?.[500] }>
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
        <dl>
          <dt>
            이메일:
          </dt>
          <dd>tlsehdfl@naver.com</dd>
          <dt>
            대표 전화:
          </dt>
          <dd>010-9204-5680</dd>
        </dl>
      </ContentWrapper>
    </StyledFooter>
  )
}

export default Footer

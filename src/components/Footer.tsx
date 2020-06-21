import React from 'react'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

import { Theme } from './Theme'

type Props = {}

const StyledFooter = styled.footer<{ bgColor: string; color: string }>`
    ${tw`p-4 border-t-2`};
    height: 180px;
    color: ${({ color }) => `${color}`};
    background-color: ${({ bgColor }) => `${bgColor}`};
`

const Logo = styled.h2`
    ${tw`font-bold`};
    font-size: 14px;
`

const ContentWrapper = styled.div`
    ${tw`h-full flex flex-col justify-between`};
    font-size: 12px;
`

const Nav = styled.nav<{ divColor: string }>`
    ${tw`w-7/12 h-6`};
    ul {
        ${tw`flex items-center h-full`};
        > li {
            ${tw`whitespace-no-wrap`};
            border-right: 1px solid ${({ divColor }) => `${divColor}`};
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

const Info = styled.dl`
    dd {
        font-weight: bold;
    }
    dd + dt {
        ${tw`mt-1`};
    }
    dt + dd {
        ${tw`mt-2`};
    }
`

const Footer: React.FC<Props> = () => {
    const theme: Theme = useTheme()

    return (
        <StyledFooter
            bgColor={theme.colors.gray?.[200]}
            color={theme.colors.gray?.[800]}
        >
            <ContentWrapper>
                <Logo>VEGETOR</Logo>
                <Nav divColor={theme.colors.gray?.[500]}>
                    <ul>
                        <li>
                            <a href="/helpdesk" rel="noreferrer noopener">
                                헬프 데스크
                            </a>
                        </li>
                        <li>
                            <a href="/" rel="noreferrer noopener">
                                이용약관
                            </a>
                        </li>
                        <li>
                            <a href="/" rel="noreferrer noopener">
                                개인정보보호정책
                            </a>
                        </li>
                    </ul>
                </Nav>
                <Info>
                    <dd>이메일:</dd>
                    <dt>
                        <a
                            href="mailto:tlsehdfl@naver.com"
                            rel="noreferrer noopener"
                        >
                            tlsehdfl@naver.com
                        </a>
                    </dt>
                    <dd>대표 전화:</dd>
                    <dt>010-9204-5680</dt>
                </Info>
            </ContentWrapper>
        </StyledFooter>
    )
}

export default Footer

import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

type Props = {
    rawHtml: string
}

const Container = styled.article`
    ${tw`py-4`};
    font-family: NotoSansCJKkr;
    font-size: 14px;
    line-height: 1.57;
    color: rgba(0, 0, 0, 0.87);
    background-color: #ffffff;
`

const Title = styled.h2`
    ${tw`pb-4`};
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.87);
`

const Content = styled.p``

const Intro: React.FC<Props> = ({ rawHtml }) => (
    <Container>
        <Title>이벤트 소개</Title>
        <Content>{rawHtml}</Content>
    </Container>
)

export default Intro

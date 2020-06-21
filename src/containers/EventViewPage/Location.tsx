import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

type Props = {}

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

const Content = styled.div`
    ${tw`w-full h-64`};
    background-color: #f7f7f7;
`

const Location: React.FC<Props> = () => (
    <Container>
        <Title>장소</Title>
        <Content></Content>
    </Container>
)

export default Location

import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

type Props = {
    id: number
    liked: boolean
    imageUrl: string
    startDate: string
    endDate: string
    title: string
    location: string
    owner: string
}

const Container = styled.article`
    ${tw`w-full h-full relative`};
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
        0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    background-color: #ffffff;
    font-family: NotoSansCJKkr;
`

const ThumbnailImg = styled.img`
    ${tw`w-full h-64`};
    border-radius: 8px 8px 0 0;
`

const ContentWrapper = styled.div`
    ${tw`w-full h-auto p-2`};
`

const Content = styled.div`
    ${tw`w-full h-auto`};
`

const Date = styled.small`
    font-size: 12px;
    line-height: 1.5;
    color: #1bcd78;
`

const Title = styled.h1`
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.87);
`

const Location = styled.p`
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
`

const Owner = styled.p`
    margin-top: 8px;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.8);
    &::before {
        content: '@ ';
    }
`

const LikeImg = styled.img`
    ${tw`absolute`};
    top: 8px;
    right: 8px;
`

const Card: React.FC<Props> = ({
    id,
    liked,
    imageUrl,
    startDate,
    endDate,
    title,
    location,
    owner,
}) => {
    return (
        <a href={`/event/${id}`} rel="noreferrer noopener">
            <Container>
                <ThumbnailImg src={imageUrl} alt="카드 이미지" />
                <ContentWrapper>
                    <Content>
                        <Date>{[startDate, endDate].join('~')}</Date>
                        <Title>{title}</Title>
                        <Location>{location}</Location>
                        <Owner>{owner}</Owner>
                    </Content>
                </ContentWrapper>
                <LikeImg src="" alt="좋아요" />
            </Container>
        </a>
    )
}

export default Card

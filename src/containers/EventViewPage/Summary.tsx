import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

import CheckImg from '../../assets/images/ic-check-primary.svg'

type Props = {
    title: string
    startDate: string
    endDate: string
    location: string
    fee: number
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

const List = styled.ul`
    li + li {
        ${tw`mt-4`};
    }
`

const ListItem = styled.li`
    ${tw`flex justify-between items-center`};
    h5 {
        font-weight: bold;
    }
    &:nth-child(2) {
        img {
            visibility: hidden;
        }
    }
    .content {
        ${tw`flex items-center w-11/12`};
        h5 {
            ${tw`w-2/12`};
            text-align: right;
        }
        p {
            ${tw`w-10/12 px-4`};
        }
    }
`

const Summary: React.FC<Props> = ({
    title,
    startDate,
    endDate,
    location,
    fee,
}) => (
    <Container>
        <Title>{title}</Title>
        <List>
            <ListItem>
                <img src={CheckImg} alt="" />
                <div className="content">
                    <h5>시작</h5>
                    <p>{startDate}</p>
                </div>
            </ListItem>
            <ListItem>
                <img src={CheckImg} alt="" />
                <div className="content">
                    <h5>종료</h5>
                    <p>{endDate}</p>
                </div>
            </ListItem>
            <ListItem>
                <img src={CheckImg} alt="" />
                <div className="content">
                    <h5>장소</h5>
                    <p>{location}</p>
                </div>
            </ListItem>
            <ListItem>
                <img src={CheckImg} alt="" />
                <div className="content">
                    <h5>참가비</h5>
                    <p>{fee === 0 ? '무료' : ''}</p>
                </div>
            </ListItem>
        </List>
    </Container>
)

export default Summary

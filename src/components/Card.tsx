import React from 'react'
import styled from '@emotion/styled/macro'

type Props = {
  liked: boolean;
  imageUrl: string;
  date: string;
  title: string;
  location: string;
}

const Container = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
`

const Card: React.FC<Props> = ({ liked, imageUrl, date, title, location}) => (
  <Container>
    <img src={ imageUrl } alt="카드 이미지" />
    <div>
      <div>
        <small>{ date }</small>
        <h1>{ title }</h1>
        <p>{ location }</p>
      </div>
    </div>
    <img src="" alt="좋아요" />
  </Container>
)

export default Card

import React from 'react'
import styled from "@emotion/styled/macro";
import tw from "twin.macro";

import ItemCurator from '../../components/ItemCurator'

type Props = {
  participants: { id: number; bgUrl: string; name: string; }[];
}

const Container = styled.article`
  ${ tw`py-4` };
  font-family: NotoSansCJKkr;
  font-size: 14px;
  line-height: 1.57;
  color: rgba(0, 0, 0, 0.87);
  background-color: #ffffff;
`

const Title = styled.h2`
  ${ tw`pb-4` };
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.87);
`


const Participant: React.FC<Props> = ({ participants }) => (
  <Container>
    <Title>참여팀 소개</Title>
    <ItemCurator items={ participants } />
  </Container>
)

export default Participant

import React from 'react'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'
import tw from 'twin.macro'
import { RouteComponentProps } from "react-router"
import {Button, Header} from '../components'

interface Props extends RouteComponentProps {
  title: string;
  cntOfAttendee: number;
  startDate: string;
  endDate: string;
  place: string;
  fee: number | null;
}

const ButtonContainer = styled.div`
  ${ tw`fixed w-full h-32 p-4` };
  bottom: 0;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled(Button)`
  ${ tw`w-full` };
`

const EventViewPage: React.FC<Props> = ({ match, title, startDate, endDate, cntOfAttendee, place, fee }) => {
  const { params } = match

  console.log(params)

  return (
    <section>
      <Header authorized={ false } />

      <article>
      </article>

      <article>
      </article>

      <article>
      </article>

      <article>
      </article>

      <article>
      </article>
기
      <article>
      </article>
      <ButtonContainer>
        <StyledButton primary onClick={() => {} }>참가하기</StyledButton>
      </ButtonContainer>
    </section>
  )
}

export default EventViewPage

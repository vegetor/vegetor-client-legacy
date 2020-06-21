import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import { RouteComponentProps } from 'react-router'
import { Button, Header } from '../../components'

import Slider from './Slider'
import Attendee from './Attendee'
import Intro from './Intro'
import Location from './Location'
import Participant from './Participant'
import Summary from './Summary'

const mock = require('./mock.json')

interface Props extends RouteComponentProps {
    title: string
    cntOfAttendee: number
    startDate: string
    endDate: string
    place: string
    fee: number | null
}

const Container = styled.div`
    ${tw`px-4 pb-32`};
`

const ButtonContainer = styled.div`
    ${tw`flex justify-center items-center w-full h-32 p-4`};
    bottom: 0;
    background-color: #f7f7f7;
`

const StyledButton = styled(Button)`
    ${tw`w-10/12`};
`

const EventViewPage: React.FC<Props> = ({ match }) => {
    const { params } = match

    console.log(params)

    const data = {
        title:
            '행사 이름이 나옵니다. 두줄 이상 나온다면 다 노출합니다. 행사 이름이 나옵니다. 두줄 이상 나온다면 다 노출합니다.',
        startDate: '2020-05-20 10:00',
        endDate: '2020-05-20 17:00',
        attendee: 0,
        location: '혜화 마로니에',
        fee: 0,
        intro:
            '행사 이름이 나옵니다. 두줄 이상 나온다면 다 노출합니다. 행사 이름이 나옵니다. 두줄 이상 나온다면 다 노출합니다. 행사 이름이 나옵니다. 두줄 이상 나온다면 다 노출합니다. 행사 이름이 나옵니다. 두줄 이상 나온다면 다 노출합니다. 행사 이름이 나옵니다. 두줄 이상 나온다면 다 노출합니다. 행사 이름이 나옵니다. 두줄 이상 나온다면 다 노출합니다.',
        participants: [
            {
                id: 0,
                bgUrl: mock.images[0],
                name: '베짱이 농부',
            },
            {
                id: 1,
                bgUrl: mock.images[1],
                name: '베짱이 농부',
            },
            {
                id: 2,
                bgUrl: mock.images[2],
                name: '베짱이 농부',
            },
            {
                id: 3,
                bgUrl: mock.images[2],
                name: '베짱이 농부',
            },
            {
                id: 4,
                bgUrl: mock.images[2],
                name: '베짱이 농부',
            },
            {
                id: 5,
                bgUrl: mock.images[2],
                name: '베짱이 농부',
            },
            {
                id: 6,
                bgUrl: mock.images[2],
                name: '베짱이 농부',
            },
            {
                id: 7,
                bgUrl: mock.images[2],
                name: '베짱이 농부',
            },
            {
                id: 8,
                bgUrl: mock.images[2],
                name: '베짱이 농부',
            },
            {
                id: 9,
                bgUrl: mock.images[2],
                name: '베짱이 농부',
            },
        ],
    }

    return (
        <section>
            <Header authorized={false} />
            <Slider images={mock.images} />
            <Container>
                <Attendee count={0} />
                <Summary
                    title={data.title}
                    startDate={data.startDate}
                    endDate={data.endDate}
                    location={data.location}
                    fee={data.fee}
                />
                <Intro rawHtml={data.intro} />
                <Participant participants={data.participants} />
                <Location />
            </Container>
            <ButtonContainer>
                <StyledButton primary onClick={() => {}}>
                    참가하기
                </StyledButton>
            </ButtonContainer>
        </section>
    )
}

export default EventViewPage

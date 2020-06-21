import React, { useCallback } from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

import {
    Header,
    Form,
    FormItem,
    InputText,
    TextEditor,
    DateRange,
    Button,
    InputEmail,
} from '../components'
import BreadCrumb from '../components/BreadCrumb'

const Container = styled.div`
    ${tw`px-4 pt-4 pb-32`};
    form {
        .form-item + .form-item {
            ${tw`mt-8`};
        }
    }
`

const ButtonContainer = styled.div`
    ${tw`fixed w-full h-32 p-4`};
    bottom: 0;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled(Button)`
    ${tw`w-full`};
`

const Description = styled.dl`
    ${tw``};
    padding: 36px 0;
    color: rgba(0, 0, 0, 0.6);
    dd {
        font-size: 28px;
        font-weight: bold;
    }
    dt {
        ${tw`mt-2`};
    }
`

const EventOrganizeDetailPage: React.FC = () => {
    const submit = useCallback(() => {}, [])

    const steps = [
        {
            id: 0,
            label: '주최할 호스트 선택',
            linkUrl: '/event/host',
            active: false,
        },
        {
            id: 1,
            label: '이벤트 상세 정보 입력',
            linkUrl: '/event/detail',
            active: true,
        },
    ]

    return (
        <section>
            <Header authorized={false} />
            <Container>
                <BreadCrumb steps={steps} />
                <Description>
                    <dd>이벤트 상세정보 입력</dd>
                    <dt>이벤트의 상세정보를 입력해 주세요.</dt>
                </Description>
                <Form>
                    <FormItem
                        label="이벤트 이름"
                        guide="주최하실 이벤트명을 입력해 주세요."
                    >
                        <InputText />
                    </FormItem>

                    <FormItem
                        label="이벤트 이미지"
                        guide="16:9 비율의 이미지가 가장 적절합니다."
                    >
                        <InputText />
                    </FormItem>

                    <FormItem
                        label="이벤트 소개"
                        guide="이벤트를 소개할 상세 정보를 입력해주세요."
                    >
                        <TextEditor />
                    </FormItem>

                    <FormItem
                        label="이벤트 기간"
                        guide="이벤트 기간을 입력해 주세요."
                    >
                        <DateRange />
                    </FormItem>

                    <FormItem
                        label="참가자 이메일"
                        guide="참가자 이메일을 입력해 주세요."
                    >
                        <InputEmail />
                    </FormItem>
                </Form>
            </Container>
            <ButtonContainer>
                <StyledButton primary onClick={submit}>
                    이벤트 등록
                </StyledButton>
            </ButtonContainer>
        </section>
    )
}

export default EventOrganizeDetailPage

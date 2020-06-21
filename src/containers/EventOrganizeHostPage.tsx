import React from 'react'
import {
    Header,
    Form,
    FormItem,
    InputText,
    InputEmail,
    Button,
} from '../components'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import { useHistory } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'

const Container = styled.div`
    ${tw`p-4`};
    form {
        .form-item + .form-item {
            ${tw`mt-8`};
        }
    }
`

const StyledForm = styled(Form)`
    ${tw`mt-16`};
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

const EventOrganizeHostPage: React.FC = () => {
    const history = useHistory()

    const steps = [
        {
            id: 0,
            label: '주최할 호스트 선택',
            linkUrl: '/event/host',
            active: true,
        },
        {
            id: 1,
            label: '이벤트 상세 정보 입력',
            linkUrl: '/event/detail',
            active: false,
        },
    ]

    return (
        <section>
            <Header authorized={false} />
            <Container>
                <BreadCrumb steps={steps} />
                <Description>
                    <dd>주최할 호스트 선택</dd>
                    <dt>이벤트를 주최할 호스트를 선택해주세요.</dt>
                </Description>
                <StyledForm>
                    <FormItem
                        label="주최자 명"
                        guide="주최자 혹은 주최할 그룹을 입력해 주세요."
                    >
                        <InputText />
                    </FormItem>

                    <FormItem
                        label="주최자 이메일"
                        guide="주최 관계자들 이메일을 입력해주세요."
                    >
                        <InputEmail />
                    </FormItem>
                </StyledForm>
            </Container>
            <ButtonContainer>
                <StyledButton
                    primary
                    onClick={() => history.push('/event/detail')}
                >
                    이벤트 상세정보 입력
                </StyledButton>
            </ButtonContainer>
        </section>
    )
}

export default EventOrganizeHostPage

import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'
import InputText from './InputText'
import Button from './Button'

const Container = styled.ul`
    ${tw`w-full`};
    li {
        ${tw`w-full flex justify-between items-center flex-no-wrap`};
    }
    li + li {
        ${tw`mt-8`};
    }
`

const StyledInputText = styled(InputText)`
    width: 200px;
    height: 40px;
`

const StyledButton = styled(Button)`
    width: 64px;
    height: 26px;
`

const InputEmail: React.FC = () => (
    <Container>
        <li>
            <StyledInputText />
            <StyledButton onClick={() => {}}>추가</StyledButton>
        </li>

        <li>
            <StyledInputText />
            <StyledButton onClick={() => {}}>추가</StyledButton>
        </li>
    </Container>
)

export default InputEmail

import React from 'react'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

type Props = {
    label: string
    name?: string
    guide?: string
    rules?: { required: string; message: string }[]
}

const Container = styled.div`
    ${tw`w-full h-full`};
    font-family: NotoSansCJKkr;
    color: rgba(0, 0, 0, 0.6);
`

const Label = styled.h6`
    font-size: 16px;
    font-weight: bold;
`

const Guide = styled.p`
    ${tw`mt-2`};
    font-size: 12px;
`

const Wrap = styled.div`
    ${tw`mt-2 w-full`};
`

const FormItem: React.FC<Props> = ({ label, name, guide, rules, children }) => (
    <Container className="form-item">
        <Label>{label}</Label>
        <Guide>{guide}</Guide>
        <Wrap>{children}</Wrap>
    </Container>
)

export default FormItem

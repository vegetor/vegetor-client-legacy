import React from 'react'
import ReactQuill from 'react-quill'
import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

type Props = {}

const Container = styled.div`
    ${tw`w-full`};
`

const TextEditor: React.FC<Props> = () => (
    <Container>
        <ReactQuill></ReactQuill>
    </Container>
)

export default TextEditor

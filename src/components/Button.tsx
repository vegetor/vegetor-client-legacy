import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'
import { Theme } from './Theme'

type Props = {
    theme?: Theme
    primary?: boolean
    secondary?: boolean
    warning?: boolean
    danger?: boolean

    sm?: boolean
    md?: boolean
    lg?: boolean

    onClick: (e: React.MouseEvent) => void
}

const StyledButton = styled.button<Props>(
    ({ theme, primary, secondary, warning, danger, sm, md, lg }) => [
        css`
            border-radius: 4px;
            font-family: NotoSansCJKkr;
            font-weight: bold;
            font-size: 14px;
            text-align: center;
            line-height: 1.57;
            white-space: nowrap;
            background-color: #fff;
            border: 1px solid ${theme.colors.green?.[600]};
            color: ${theme.colors.green?.[600]};
            ${tw`flex justify-center items-center px-8 py-2 rounded transform hocus:scale-105 transition-transform duration-75 focus:outline-none`}
        `,
        primary &&
            css`
                border: none;
                background-color: ${theme.colors.green?.[600]};
                color: #ffffff;
            `,
        secondary &&
            css`
                border: none;
                background-color: ${theme.colors.yellow?.[600]};
                color: #ffffff;
            `,
        warning &&
            css`
                border: none;
                background-color: ${theme.colors.orange?.[600]};
                color: #ffffff;
            `,
        danger &&
            css`
                border: none;
                background-color: ${theme.colors.red?.[600]};
                color: #ffffff;
            `,
        sm &&
            css`
                font-size: 10px;
            `,
        md &&
            css`
                font-size: 16px;
            `,
        lg &&
            css`
                font-size: 18px;
            `,
    ]
)

const Button: React.FC<Props> = ({ children, onClick, theme, ...rest }) => (
    <StyledButton onClick={onClick} {...rest}>
        {children}
    </StyledButton>
)

export default Button

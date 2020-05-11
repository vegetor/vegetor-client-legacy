import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled/macro'
import { css } from '@emotion/core'
import { Theme } from './Theme'

type Props = {
  theme?: Theme;
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  danger?: boolean;

  sm?: boolean;
  md?: boolean;
  lg?: boolean;

  onClick: (e: React.MouseEvent) => void
}

const StyledButton = styled.button<Props>(({ theme, primary, secondary, warning, danger, sm, md, lg }) => [
  css`
    border-radius: 4px;
    font-family: NotoSansCJKkr;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    line-height: 1.57;
    ${ tw`text-lg px-8 py-2 rounded transform hocus:scale-105 transition-transform duration-75 focus:outline-none` }
  `,
  primary && css`
    background-color: ${ theme.colors.green?.[600] };
    color: #ffffff;
  `,
  secondary && tw``,
  warning && tw``,
  danger && tw``,
  sm && tw``,
  md && tw``,
  lg && tw``
])

const Button: React.FC<Props> = ({ children, onClick, theme, ...rest }) => (
  <StyledButton onClick={ onClick } { ...rest }>
    { children }
  </StyledButton>
)

export default Button

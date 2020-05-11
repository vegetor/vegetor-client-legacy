import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import TailWindConfig from './../tailwind.config.js'

const { theme } = TailWindConfig

export type Theme = typeof theme

const Theme = (props: any) => <ThemeProvider { ...props } theme={ theme } />

export default Theme

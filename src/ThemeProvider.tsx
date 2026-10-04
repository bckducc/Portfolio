import { Component, type ReactNode } from 'react'
import { ConfigProvider, type ThemeConfig } from 'antd'

const theme: ThemeConfig = {
  token: {},
}

type ThemeProviderProps = {
  children: ReactNode
}

export class ThemeProvider extends Component<ThemeProviderProps> {
  render() {
    return <ConfigProvider theme={theme}>{this.props.children}</ConfigProvider>
  }
}

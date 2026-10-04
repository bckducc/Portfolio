import { Component, type ReactNode } from 'react'
import { ParamsContext, RouterContext, type NavigateOptions, type RouterContextValue } from './hooks'
import { matchPath } from './matchPath'

export type RouteConfig = {
  path: string
  element: ReactNode
}

type RouterProps = {
  children: ReactNode
}

type RouterState = {
  pathname: string
}

/** Provider: theo dõi URL (History API) và cung cấp navigate(). Bọc ngoài cùng của layout. */
export class Router extends Component<RouterProps, RouterState> {
  state: RouterState = {
    pathname: window.location.pathname,
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState)
  }

  handlePopState = () => {
    this.setState({ pathname: window.location.pathname })
  }

  navigate = (to: string, options?: NavigateOptions) => {
    const url = new URL(to, window.location.origin)
    if (options?.replace) {
      window.history.replaceState(null, '', url)
    } else {
      window.history.pushState(null, '', url)
    }
    this.setState({ pathname: url.pathname })
    window.scrollTo(0, 0)
  }

  render() {
    const value: RouterContextValue = {
      pathname: this.state.pathname,
      navigate: this.navigate,
    }

    return <RouterContext.Provider value={value}>{this.props.children}</RouterContext.Provider>
  }
}

type RoutesProps = {
  routes: RouteConfig[]
  notFound?: ReactNode
}

type RoutesState = Record<string, never>

/** Render route đầu tiên khớp với URL hiện tại. */
export class Routes extends Component<RoutesProps, RoutesState> {
  static contextType = RouterContext

  declare context: React.ContextType<typeof RouterContext>

  render() {
    const router = this.context
    if (!router) throw new Error('<Routes> phải được dùng bên trong <Router>.')

    for (const route of this.props.routes) {
      const params = matchPath(route.path, router.pathname)
      if (params) {
        return <ParamsContext.Provider value={params}>{route.element}</ParamsContext.Provider>
      }
    }

    return <>{this.props.notFound ?? null}</>
  }
}

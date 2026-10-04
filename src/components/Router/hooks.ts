import { createContext, useContext } from 'react'

export type NavigateOptions = { replace?: boolean }

export type RouterContextValue = {
  pathname: string
  navigate: (to: string, options?: NavigateOptions) => void
}

export const RouterContext = createContext<RouterContextValue | null>(null)
export const ParamsContext = createContext<Record<string, string>>({})

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('Router hooks phải được dùng bên trong <Router>.')
  return ctx
}

export const useNavigate = () => useRouter().navigate
export const usePathname = () => useRouter().pathname
/** Tham số động của route, vd. /projects/:slug → { slug }. */
export const useParams = () => useContext(ParamsContext)

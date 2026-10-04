const segments = (path: string) => path.split('/').filter(Boolean)

/** So khớp pathname với pattern (hỗ trợ :param). Trả về params hoặc null. */
export function matchPath(pattern: string, pathname: string): Record<string, string> | null {
  const a = segments(pattern)
  const b = segments(pathname)
  if (a.length !== b.length) return null

  const params: Record<string, string> = {}
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith(':')) {
      try {
        params[a[i].slice(1)] = decodeURIComponent(b[i])
      } catch {
        return null
      }
    } else if (a[i] !== b[i]) {
      return null
    }
  }
  return params
}

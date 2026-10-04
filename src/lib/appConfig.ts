export const APP_NAME = 'Bckducc'

export const ROUTES = {
  home: '/',
  projects: '/projects',
  projectDetail: '/projects/:slug',
  about: '/about',
  contact: '/contact',
} as const

export const projectPath = (slug: string) => `/projects/${slug}`

export type NavItem = {
  label: string
  to: string
  cta?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Projects', to: ROUTES.projects },
  { label: 'About', to: ROUTES.about },
  { label: 'Contact', to: ROUTES.contact, cta: true },
]

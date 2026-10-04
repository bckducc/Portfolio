import { Component } from 'react'
import { MainLayout } from './components/Layout'
import { Router, Routes, type RouteConfig } from './components/Router'
import { ROUTES } from './lib/appConfig'
import { AboutScene } from './scenes/About'
import { ContactScene } from './scenes/Contact'
import { HomeScene } from './scenes/Home'
import { NotFoundScene } from './scenes/NotFound'
import { ProjectDetailScene } from './scenes/ProjectDetail'
import { ProjectsScene } from './scenes/Projects'

const routes: RouteConfig[] = [
  { path: ROUTES.home, element: <HomeScene /> },
  { path: ROUTES.projects, element: <ProjectsScene /> },
  { path: ROUTES.projectDetail, element: <ProjectDetailScene /> },
  { path: ROUTES.about, element: <AboutScene /> },
  { path: ROUTES.contact, element: <ContactScene /> },
]

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Routes routes={routes} notFound={<NotFoundScene />} />
        </MainLayout>
      </Router>
    )
  }
}

export default App

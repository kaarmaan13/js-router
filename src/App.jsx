import { lazy } from 'react'

import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'

import { Router } from './components/Router'
import { Route } from './components/Route'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage,
  }
]

function App() {
  return (
    <main>
      <Router routes={appRoutes} >
        <Route path='/about' Component={AboutPage} />
        <Route path='/' Component={HomePage} />
      </Router>
    </main>
  )
}

export default App

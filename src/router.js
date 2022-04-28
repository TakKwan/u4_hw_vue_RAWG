import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import ViewGames from './pages/ViewGames'
import GameDetails from './pages/GameDetails'
import AboutPage from './pages/AboutPage'

const routes = [
  { path: "/", component: HomePage, name: "HomePage" },
  { path: "/games/:genre_id", component: ViewGames, name: "ViewGames" },
  { path: "/details/:game_id", component: GameDetails, name: "GameDetails" },
  { path: "/about", component: AboutPage, name: "AboutPage" },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

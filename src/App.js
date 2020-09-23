import React from "react"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/global/Header"
import Sidebar from "./components/global/Sidebar"
import RecommendedVideos from "./components/home/RecommendedVideos"
import SearchPage from "./components/search/SearchPage"
import Play from "./components/videoplay/Play"

function App() {
  // BEM
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Router path="/watch/:videoId">
            <div className="app__page">
              <Sidebar />
              <Play />
            </div>
          </Router>
          <Router path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Router>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

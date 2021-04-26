import './styles/meyer.css'
import './styles/App.css'
import './styles/Home.css'
import './styles/Dev.css'
import './styles/Photo.css'
import './styles/Journal.css'
import './styles/About.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import HeaderContainer from './components/HeaderContainer'
import Home from './Home'
import Dev from './Dev'
import Photo from './Photo'
import Journal from './Journal'
import About from './About'
import Menu from './components/Menu'
import Cursor from './components/Cursor'


function App() {

  const [menuClass, setMenuClass] = useState('menu-hidden')
  const [linkHover, setLinkHover] = useState(false)

  useEffect(() => {
    const addLinkEvents = () => {
      document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('mouseover', () => setLinkHover(true))
        link.addEventListener('mouseout', () => setLinkHover(false))
      })
    }

    addLinkEvents()

  }, [])

  const toggleMenu = () => {
    if (menuClass === 'menu') {
      setMenuClass('menu-hidden animate__animated animate__slideOutRight animate__slow')
    } else {
      setMenuClass('menu')
    }
  }

  const updateCursor = (event) => {
    const cursor = document.querySelector(".cursor")
    cursor.style.left = `${event.pageX}px`
    cursor.style.top = `${event.pageY}px`
  }

  const hideCursor = (event) => {
    const cursor = document.querySelector(".cursor")
    cursor.style.display = 'none'
  }

  const showCursor = (event) => {
    const cursor = document.querySelector(".cursor")
    cursor.style.display = ''
  }

  

  return (
    <Router>
      <div className="app" onMouseMove={updateCursor} onMouseLeave={hideCursor} onMouseEnter={showCursor}>
        <HeaderContainer toggleMenu={toggleMenu}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dev" component={Dev} />
          <Route path="/photo" component={Photo} />
          <Route path="/journal" component={Journal} />
          <Route path="/about" component={About} />
        </Switch>
      <Menu currentClass={menuClass} toggleMenu={toggleMenu}/>
      <Cursor />
      </div>
    </Router>
  );
}

export default App;

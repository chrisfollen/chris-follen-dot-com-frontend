import './styles/meyer.css'
import './styles/App.css'
import './styles/Home.css'
import './styles/Dev.css'
import './styles/Photo.css'
import './styles/Journal.css'
import './styles/About.css'
import './styles/NotFound.css'
import './styles/Preload.css'
import './styles/Loader.css'
import './styles/BlackSpace.css'
import './styles/Article.css'
import './styles/Mezcal.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import HeaderContainer from './components/HeaderContainer'
import Home from './Home'
import Dev from './Dev'
import Photo from './Photo'
import Journal from './Journal'
import About from './About'
import Mezcal from './Mezcal'
import Menu from './components/Menu'
import Cursor from './components/Cursor'
import NotFound from './NotFound'
import Footer from './components/Footer'
import Preload from './components/Preload'
import Loader from './components/Loader'
import BlackSpace from './components/BlackSpace'
import Article from './components/Article'




function App() {

  const [menuClass, setMenuClass] = useState('menu')
  const [linkHover, setLinkHover] = useState(false)
  const [currentLink, setCurrentLink] = useState('')
  const [headerClass, setHeaderClass] = useState('large-header-home')
  const [footerClass, setFooterClass] = useState('footer-hidden')
  const [preloading, setPreloading] = useState(true)
  const [loading, setLoading] = useState(false)

  const checkHeaderClass = () => {
    let thisClass = 'large-header'
    if(currentLink === '/' || currentLink === 'http://localhost:3000/') {
      thisClass = 'large-header-home'
    }
    setHeaderClass(thisClass)
  }

  const checkFooterClass = () => {
    let thisFooterClass
    if(currentLink === 'http://localhost:3000/') {
      thisFooterClass = 'footer-hidden'
    } else {
      thisFooterClass = 'footer'
    }

    setFooterClass(thisFooterClass)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1800)
    checkHeaderClass()
    checkFooterClass()
  }, [currentLink])

  useEffect(() => {
    setTimeout(() => setPreloading(false), 3500)
    addEventListeners()
    updateLink(window.location.href)
  }, [])

  const updateLink = (path) => {
    setCurrentLink(path)
  }

  const toggleMenu = () => {
    if (menuClass === 'menu') {
      setMenuClass('menu menu-active')
    } else {
      setMenuClass('menu')
    }
  }

  const updateCursor = (event) => {
    const cursor = document.querySelector(".cursor")
    cursor.style.left = `${event.pageX}px`
    cursor.style.top = `${event.pageY}px`
    if(linkHover === true){
      cursor.style.transform = 'scale(2) translate(-25%, -25%)'
    } else {
      cursor.style.transform = 'scale(1) translate(-50%, -50%)'
    }
  }

  const hideCursor = (_) => {
    const cursor = document.querySelector(".cursor")
    cursor.style.display = 'none'
  }

  const showCursor = (_) => {
    const cursor = document.querySelector(".cursor")
    cursor.style.display = ''
  }

  const addEventListeners = () => {
    document.querySelectorAll('a, .clickable, .clickable-photo').forEach((link) => {
      link.addEventListener('mouseover', () => setLinkHover(true))
      link.addEventListener('mouseout', () => setLinkHover(false))
    })
  }

  return (
    <Router>
      <div className="app" onMouseMove={updateCursor} onScroll={updateCursor} onMouseLeave={hideCursor} onMouseEnter={showCursor}>
        <Preload loadState={preloading}/>
        <Loader loadState={loading} />
        <HeaderContainer toggleMenu={toggleMenu} headerClass={headerClass} updateLink={updateLink} />
        <Switch>
          <Route path="/" exact render={routerProps => <Home {...routerProps} updateLink={updateLink} />} />
          <Route path="/dev" component={Dev} />
          <Route path="/photo" component={Photo} />
          <Route path="/journal" exact component={Journal} />
          <Route path="/journal/:slug" component={Article} />
          <Route path='/mezcal' component={Mezcal} />
          <Route path="/about" component={About} />
          <Route render={routerProps => <NotFound {...routerProps} updateLink={updateLink} />} />


        </Switch>
      <Menu currentClass={menuClass} toggleMenu={toggleMenu} updateLink={updateLink} />
      <Cursor />
      <Footer footerClass={footerClass}/>
      <BlackSpace />
      </div>
    </Router>
  );
}

export default App;

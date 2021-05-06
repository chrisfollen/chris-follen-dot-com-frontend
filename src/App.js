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

  useEffect(() => {
    setTimeout(() => {
      setPreloading(false)
    }, 3500)
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [currentLink])


  useEffect(() => {
    const addEventListeners = () => {
      document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('mouseover', () => setLinkHover(true))
        link.addEventListener('mouseout', () => setLinkHover(false))
        link.addEventListener('mousedown', () => setLinkHover(false))
        link.addEventListener('mousedown', () => updateLink())
        link.addEventListener('mouseup', () => updateLink())
        link.addEventListener('click', () => updateLink())
        link.addEventListener('mousedown', () => checkHeaderClass)
      })

      document.querySelectorAll('.clickable').forEach((clicker) => {
        clicker.addEventListener('mouseover', () => setLinkHover(true))
        clicker.addEventListener('mouseout', () => setLinkHover(false))
        clicker.addEventListener('mousedown', () => setLinkHover(false))
        clicker.addEventListener('mousedown', () => updateLink())
        clicker.addEventListener('mouseup', () => updateLink())
        clicker.addEventListener('mousedown', () => checkHeaderClass())
      })

      document.querySelectorAll('.clickable-photo').forEach((clicker) => {
        clicker.addEventListener('mouseover', () => setLinkHover(true))
        clicker.addEventListener('mouseout', () => setLinkHover(false))
        clicker.addEventListener('mousedown', () => setLinkHover(false))
      })

      const doc = document.querySelector('.app')
      doc.addEventListener('mousemove', () => checkHeaderClass())
      doc.addEventListener('mousemove', () => updateLink())
      doc.addEventListener('mousemove', () => checkFooterClass())
    }

    const removeEventListeners = () => {
      document.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('mouseover', () => setLinkHover(true))
        link.removeEventListener('mouseout', () => setLinkHover(false))
        link.removeEventListener('mousedown', () => setLinkHover(false))
        link.removeEventListener('mousedown', () => updateLink())
        link.removeEventListener('mouseup', () => updateLink())
        link.removeEventListener('mousedown', () => checkHeaderClass)
      })

      document.querySelectorAll('.clickable').forEach((clicker) => {
        clicker.removeEventListener('mouseover', () => setLinkHover(true))
        clicker.removeEventListener('mouseout', () => setLinkHover(false))
        clicker.removeEventListener('mousedown', () => setLinkHover(false))
        clicker.removeEventListener('mousedown', () => updateLink())
        clicker.removeEventListener('mouseup', () => updateLink())
        clicker.removeEventListener('mousedown', () => checkHeaderClass())
      })

      document.querySelectorAll('.clickable-photo').forEach((clicker) => {
        clicker.removeEventListener('mouseover', () => setLinkHover(true))
        clicker.removeEventListener('mouseout', () => setLinkHover(false))
        clicker.removeEventListener('mousedown', () => setLinkHover(false))
      })

      const doc = document.querySelector('.app')
      doc.removeEventListener('mousemove', () => checkHeaderClass())
      doc.removeEventListener('mousemove', () => checkFooterClass())
      doc.removeEventListener('mousemove', () => updateLink())
    }

    addEventListeners()

    const checkHeaderClass = () => {
      let thisClass = 'large-header'
      if(currentLink === 'http://localhost:3000/') {
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


    const updateLink = () => {
      setCurrentLink(window.location.href)
    }

    return () => removeEventListeners()

  }, [linkHover, currentLink])



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
      <div className="app" onMouseMove={updateCursor} onScroll={updateCursor} onMouseLeave={hideCursor} onMouseEnter={showCursor}>
        <Preload loadState={preloading}/>
        <Loader loadState={loading} />
        <HeaderContainer toggleMenu={toggleMenu} headerClass={headerClass}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dev" component={Dev} />
          <Route path="/photo" component={Photo} />
          <Route path="/journal" exact component={Journal} />
          <Route path="/journal/:slug" component={Article} />
          <Route path="/about" component={About} />
          <Route path='/mezcal' component={Mezcal} />
          <Route component={NotFound} />
        </Switch>
      <Menu currentClass={menuClass} toggleMenu={toggleMenu}/>
      <Cursor />
      <Footer footerClass={footerClass}/>
      <BlackSpace />
      </div>
    </Router>
  );
}

export default App;

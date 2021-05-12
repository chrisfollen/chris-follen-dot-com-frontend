import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'

function Home(props) {

  useEffect(() => {
    document.title = "CHRIS FOLLEN"
 }, []);

  return (
    <div className='home'>
        <h2>FRONT-END WEB <Link onClick={() => props.updateLink('/dev')} to='/dev'><span className='red-text clickable'>DEV</span></Link>ELOPER</h2>
        <h2><Link onClick={() => props.updateLink('/photo')} to='/photo'><span className='red-text clickable'>PHOTO</span></Link>GRAPHER</h2>
        <h2>BASED IN COLO<Link onClick={() => props.updateLink('/about')} to='/about'><span className='red-text clickable'>RAD</span></Link>O</h2>
    </div>
  );
}

export default Home;
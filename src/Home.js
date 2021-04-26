import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='home'>

        <h2>FRONT-END WEB <Link to='/dev'><span className='red-text'>DEV</span></Link>ELOPER</h2>
        <h2><Link to='/photo'><span className='red-text'>PHOTO</span></Link>GRAPHER</h2>
        <h2>BASED IN COLO<Link to='/about'><span className='red-text'>RAD</span></Link>O</h2>

    </div>
  );
}

export default Home;
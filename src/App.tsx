import './App.scss'
import { ArrowIcon } from './components/arrow-icon'

function App() {
  return (
    <main>
      <header className='header-container'>
        <img src="./logo.svg"/>
        <nav className="menu-options">
          <a>What we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          <div className='btn-face-white'>
            Contact us
            <ArrowIcon/>
          </div>
          <div className='btn-face-color'>
            Contact us
            <ArrowIcon/>
          </div>
        </button>
      </header>

      <div className="content-container">
        <div className="heading-container">
          <h2> Let's grow your </h2>
          <h2> social presence. </h2>
        </div>
        <div className="bubble target">
          <img src="./target.png"/>
        </div>
        <div className="bubble shop">
          <img src="./shop.png"/>
        </div>
        <div className="bubble rocket">
          <img src="./rocket.png"/>
        </div>
        <div className="bubble fire">
          <img src="./fire.png"/>
        </div>
      </div>

      <div className='box'>
        <div>
          <h3> We want to get to know you 😊</h3>
        </div>
        <hr />
        <div>
          <p> Hi! 😉 What best explains you? </p>
          <br />
          <div className='services'>
            <div className='services boxe'>
              <p>📦 </p>
              <span>Products </span>
            </div>
            <div className='services hand'>
              <p>🤝 </p>
              <span>Services </span>
            </div>
            <div className='services pc'>
              <p>💻 </p>
              <span>Saas </span>
            </div>
            <div className='services phone'>
              <p>🤳🏼 </p>
              <span>Personality </span>
            </div>
            <div className='services smile'>
              <p>🤔 </p>
              <span>Other </span>
            </div>
          </div>
          <hr />
          <div>
            <button className='btn'>Next</button>
          </div>
        </div>
      </div>
      <div className='news'>
        <p>Subscribe to our newsletter</p>
      </div>
    </main>    
  )
}

export default App

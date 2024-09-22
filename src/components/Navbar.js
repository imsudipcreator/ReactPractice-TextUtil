import React from 'react'
import { Link, Outlet  } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} id='root'>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TextUtil</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Action">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <button className='btn btn-dark'>Dark Mode</button> */}
      {/* <div className={`form-check form-switch text-${props.mode === 'dark'? 'light':'dark'} ml-2`}>
      <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault">{props.mode == 'dark'?'Light':'Dark'} Mode</label>
       </div> */}

      
       <input type="radio" className="btn-check " name="options-base" id="option4" autocomplete="off" onClick={props.toggleDarkMode} />
<label className={`btn text-${props.mode==='dark'?'light':'dark'}`} htmlFor="option4">Dark Mode</label>

       <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" onClick={props.toggleBlueMode} />
<label className={`btn text-${props.mode==='dark'?'light':'dark'}`} htmlFor="option5">Blue Mode</label>

<input type="radio" className="btn-check" name="options-base" id="option6" autocomplete="off" onClick={props.toggleYellowMode}/>
<label className={`btn text-${props.mode==='dark'?'light':'dark'}`} htmlFor="option6">Yellow Mode</label>

<input type="radio" className="btn-check" name="options-base" id="option7" autocomplete="off" onClick={props.toggleGreenMode}/>
<label className={`btn text-${props.mode==='dark'?'light':'dark'}`} htmlFor="option7">Green Mode</label>

<input type="radio" className="btn-check" name="options-base" id="option8" autocomplete="off" onClick={props.toggleRedMode}/>
<label className={`btn text-${props.mode==='dark'?'light':'dark'}`} htmlFor="option8">Red Mode</label>
    </div>
        
  </div>
  
</nav>




      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}


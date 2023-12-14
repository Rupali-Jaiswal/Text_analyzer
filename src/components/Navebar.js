import React, { useState } from 'react'
import PropTypes from 'prop-types'
const tgl=()=> {
  document.getElementById("myDropdown").classList.toggle("show")
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
      document.getElementById('myDropdown').classList.remove("show")
  }
}  

export default function Navebar(props) {
  return (
    <div>
      <nav id="navbar" className={`navbar navbar-expand-lg`} style={{ backgroundColor: `${props.mode}`,  borderBottom: 'solid',borderBottomColor:'black', borderBottomWidth:'2px'}} >
        <div className="container-fluid">
          <a className="navbar-brand" style={{fontSize:'17px'}}href="#">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-a active" style={{color:'black', textDecoration:'none',fontSize:'17px' }} aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-a" style={{color:'black', textDecoration:'none',fontSize:'17px' }}href="#">Contact</a>
              </li>
            </ul>
            <div className="dropdown">
              <button onClick={()=>{tgl()}} className="dropbtn">Change Theme</button>
              <div id="myDropdown" className="dropdown-content">
                <div className="pallete rounded  mx-1" onClick={() => { props.togglemode('#0dcaf0') }} style={{
                  height: '17.5px', width: '17.5px', cursor: 'pointer',backgroundColor:'#0dcaf0'
                }}></div>
                <div className="pallete rounded mx-1" onClick={() => { props.togglemode('#c95b5b') }} style={{
                  height: '17.5px', width: '17.5px', cursor: 'pointer',backgroundColor:'#c95b5b'
                }}></div>
                <div className="pallete rounded  mx-1" onClick={() => { props.togglemode('#20c997') }} style={{
                  height: '17.5px', width: '17.5px', cursor: 'pointer',backgroundColor:'#20c997'
                }}></div>
                <div className="pallete rounded  mx-1" onClick={() => { props.togglemode('#7c7d7f') }} style={{
                  height: '17.5px', width: '17.5px', cursor: 'pointer',backgroundColor:'#7c7d7f'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


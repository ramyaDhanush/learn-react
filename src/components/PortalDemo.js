import React from 'react'
import ReactDOM from 'react-dom'

// By general, when new id(other than 'roor) is created in 
// index.html, we can use that id
// render components outside root id 

// To do that we need to import reactDOM and 
// use createPortal method to render a component
// inside that new id

// creatPortal takes 2 arguments 
// 1st arg - JSX Component that react can render
// 2nd arg - Id to which we need to render this component
function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>
      Portals Demo
    </h1>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo

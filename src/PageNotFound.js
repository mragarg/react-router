import React from 'react'
import { Redirect, Link } from 'react-router-dom'

function PageNotFound(props) {
  return (
    <div>
      <h1>Nope.</h1>
      {/* <Redirect to="/"/> */}
      <Link to="/">Home</Link>
    </div>
  )
}

export default PageNotFound;
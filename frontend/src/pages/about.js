import React from 'react'
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <ul>
        <li><Link to="/" activeStyle={{ color: "red" }}>Home</Link></li>
        <li><Link to="/about" activeStyle={{ color: "red" }}>About</Link></li>
      </ul>
    </>
  )
}

export default AboutPage

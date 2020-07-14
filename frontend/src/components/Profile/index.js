import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Profile = () => {
  const { site: { siteMetadata: { title, position, description }}} = useStaticQuery(
    graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `)
  return(
    <div className="profileWrapper">
      <h1>{ title }</h1>
      <h3>{ position }</h3>
      <p>{ description }</p>
    </div>
  )
}

export default Profile
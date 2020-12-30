import React from "react"
import { graphql } from "gatsby"

export default function John({ data }) {
  const {
    contentfulPerson: { name, email, phone, title },
  } = data
  return (
    <h1>
      {name} is a {title} and can be reached at {email} and {phone}
    </h1>
  )
}

export const query = graphql`
  query {
    contentfulPerson(email: { eq: "john@doe.com" }) {
      id
      name
      email
      phone
      title
    }
  }
`

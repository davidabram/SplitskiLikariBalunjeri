import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const IndexPageTemplate = ({
  title,
  content,
}) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <IndexPageTemplate
        title={frontmatter.title}
        content={frontmatter.content}
      />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        content
      }
    }
  }
`
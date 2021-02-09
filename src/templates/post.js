import React from "react"
import { graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h3>
        {post.frontmatter.title}{" "}
        <span>
          — {post.frontmatter.date}
        </span>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
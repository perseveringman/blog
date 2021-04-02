import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled";
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
const H1 = styled.h1`
    display: flex;
    justify-content: space-between;
    color: ${p => p.theme.colors.articleText};
    transition: ${p => p.theme.colorModeTransition}, transform 0.45s ease;
`;
const Div = styled.div`
    color: ${p => p.theme.colors.articleText};
    transition: ${p => p.theme.colorModeTransition}, transform 0.45s ease;
`;
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <H1>
        {post.frontmatter.title}{" "}
        <span>
          {post.frontmatter.date}
        </span>
      </H1>
      <Div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
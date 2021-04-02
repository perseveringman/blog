import React from "react"
import { graphql, Link } from "gatsby"
// import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "@emotion/styled";

const H1 = styled.h1`
    display: flex;
    justify-content: space-between;
    color: ${p => p.theme.colors.articleText};
    transition: ${p => p.theme.colorModeTransition}, transform 0.45s ease;
`;
const P = styled.p`
    color: ${p => p.theme.colors.articleText};
    transition: ${p => p.theme.colorModeTransition}, transform 0.45s ease;
`;
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {/* <H1>{data.allMarkdownRemark.totalCount} Posts</H1> */}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.id} to={`/posts/${node.id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
            <H1>
              {node.frontmatter.title}{" "}
              <span>
                {node.frontmatter.date}
              </span>
            </H1>
            <P>{node.excerpt}</P>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          html
        }
      }
    }
  }
`
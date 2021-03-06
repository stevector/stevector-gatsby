import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostPage = data => (
  <Layout>
    <SEO
      title={data.data.drupaldata.nodeQuery.entities[0].entityLabel}
      description={data.data.drupaldata.nodeQuery.entities[0].fieldTextPullQuotes[0].processed.replace(
        /(<([^>]+)>)/gi,
        ""
      )}
    />
    <h1>{data.data.drupaldata.nodeQuery.entities[0].entityLabel} </h1>
    <b>Blog Post:</b>{" "}
    <span>
      Published on{" "}
      {data.data.drupaldata.nodeQuery.entities[0].fieldDatePublished.value}
      <br />
      <br />
    </span>
    {data.data.drupaldata.nodeQuery.entities[0].body ? (
      <div
        dangerouslySetInnerHTML={{
          __html: data.data.drupaldata.nodeQuery.entities[0].body.processed,
        }}
      />
    ) : null}
  </Layout>
)

export default BlogPostPage

export const query = graphql`
  query getSingleBlogPost($entityId: String!) {
    __typename
    drupaldata {
      nodeQuery(
        filter: { conditions: [{ field: "nid", value: [$entityId] }] }
      ) {
        entities {
          entityLabel
          entityBundle
          entityId
          entityUrl {
            routed
            path
            ... on Drupal_EntityCanonicalUrl {
              pathInternal
              pathAlias
            }
          }
          ... on Drupal_NodeBlogPost {
            fieldDatePublished {
              date
              value
            }
            fieldTextPullQuotes {
              processed
            }
            nid
            uuid
            body {
              processed
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SingleEntity = ({ entity }) => (
  <div class="blog-teaser">
    <h3>
      {entity.fieldLink ? (
        <a href={entity.fieldLink.uri}>{entity.entityLabel}</a>
      ) : (
        <Link to={entity.entityUrl.path}>{entity.entityLabel}</Link>
      )}
    </h3>
    <span class="text-gray-800 content-type-label">Blog Post:</span> <span class="text-gray-800">Published on {entity.fieldDatePublished.value}</span>

    {entity.fieldTextPullQuotes && entity.fieldTextPullQuotes[0] ? (
      <div
        dangerouslySetInnerHTML={{
          __html: entity.fieldTextPullQuotes[0].processed,
        }}
      />
    ) : null}
<p class="read-more">
{entity.fieldLink ? (
        <a href={entity.fieldLink.uri}>Read blog post</a>
      ) : (
        <Link to={entity.entityUrl.path}>Read blog post</Link>
      )}
</p>

  </div>
)

const EntityHolder = ({ entities }) => (
  <div>
    {entities.entities.map((entity, i) => (

      entity.fieldLink ? (
        // For parity with existing blog, don't print external blog posts.
        null      
) : (
        <SingleEntity entity={entity} />
      )

    ))}
  </div>
)

const IndexPage = data => (
  <Layout>
    <SEO title="Home" />
    <h1>Blog Posts</h1>
    <EntityHolder entities={data.data.drupaldata.nodeQuery} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    __typename
    drupaldata {
      nodeQuery(
        limit: 100
        filter: {
          conditions: [
            { field: "status", value: ["1"] }
            { field: "type", value: ["blog_post"] }
          ]
        }
        sort: { field: "nid", direction: ASC }
      ) {
        entities {
          entityLabel
          entityType
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
            nid
            uuid
            fieldDatePublished {
              date
              value
            }
            fieldLink {
              uri
            }
            fieldTextPullQuotes {
              processed
            }
            path {
              alias
              pid
              langcode
            }
          }
        }
      }
    }
  }
`

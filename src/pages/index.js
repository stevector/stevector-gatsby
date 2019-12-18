import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTeaser from "../components/blogTeaser"

const datePublished_sortFunction = function(a, b) {  
  var dateA = new Date(a.fieldDatePublished.value).getTime(); 
  var dateB = new Date(b.fieldDatePublished.value).getTime(); 

  console.log(b.fieldDatePublished.value);
  return dateA < dateB ? 1 : -1;  
};  

const sortEntities = function(entities) {
  entities.sort(datePublished_sortFunction);
  return entities;
}

const EntityHolder = ({ entities }) => (
  //entities.
  <div>
    

    {
    entities.map((entity, i) => (

      entity.fieldLink ? (
        // For parity with existing blog, don't print external blog posts.
        null      
) : (
        <BlogTeaser entity={entity} />
      )

    ))}
  </div>
)

const EntitySorter = ({ entities }) => (
  //entities.
  
  <EntityHolder entities={sortEntities(entities)} />


)

const IndexPage = data => (
  <Layout>
    <SEO title="Home" />
    <h1>Blog Posts</h1>
    <EntitySorter entities={data.data.drupaldata.nodeQuery.entities} />
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

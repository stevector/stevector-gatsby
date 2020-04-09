import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PresentationPage = data => (
  <Layout>
    <SEO title="{data.data.drupaldata.nodeQuery.entities[0].entityLabel}" />
    <h1>{data.data.drupaldata.nodeQuery.entities[0].entityLabel} </h1>
  </Layout>
)

export default PresentationPage

export const query = graphql`
  query getSinglePresentation($entityId: String!) {
    __typename
    drupaldata {
      nodeQuery(
        filter: { conditions: [{ field: "nid", value: [$entityId] }] }
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
        }
      }
    }
  }
`

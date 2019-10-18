import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PresentationPage = (data) => (
  <Layout>
    <SEO title="{data.data.drupaldata.nodeQuery.entities[0].entityLabel}" />
    <h1>{data.data.drupaldata.nodeQuery.entities[0].entityLabel} </h1>
    <p>Welcome to the page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PresentationPage


export const query = graphql`
query MyQueryz($entityId: String!) {
  __typename
  drupaldata {
    nodeQuery(filter: {conditions: [{field: "nid", value: [$entityId]}]}
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

}`
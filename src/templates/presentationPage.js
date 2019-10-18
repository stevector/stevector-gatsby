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
    nodeQuery(limit: 10, filter: {conditions: [{field: "nid", value: [$entityId]}, {field: "type", value: ["presentation"]}, {operator: GREATER_THAN, field: "changed", value: ["1"]}]}, sort: {field: "nid", direction: ASC}) {
      
            entities {
              entityLabel
              entityChanged(format: "Y-m-d")
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
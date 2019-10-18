import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const SingleEntity =  ({ entity }) => (
  <div>{entity.entityId} - {entity.entityLabel} - {entity.entityUrl.path}   <Link to={entity.entityUrl.path}>{entity.entityLabel}</Link> </div>
 )

const EntityHolder = ({ entities }) => (
 <div>


 {entities.entities.map((entity, i) => (
   <SingleEntity entity={entity} />
 ))}

 </div>
)

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <EntityHolder entities={data.data.drupaldata.nodeQuery} />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
query MyQuery {
  __typename
  drupaldata {
    nodeQuery(limit: 100, filter: {conditions: [{field: "status", value: ["1"]}, {field: "type", value: ["presentation"]}, {operator: GREATER_THAN, field: "changed", value: ["1"]}]}, sort: {field: "nid", direction: ASC}) {
      
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

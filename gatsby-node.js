/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    //const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)


      
    
    const drupalNodes = await graphql(`query MyQuery {
    __typename
    drupaldata {
      nodeQuery(limit: 10, filter: {conditions: [{field: "status", value: ["1"]}, {field: "type", value: ["presentation"]}, {operator: GREATER_THAN, field: "changed", value: ["1"]}]}, sort: {field: "nid", direction: ASC}) {
        
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
  
  }
  `);   

  console.log(JSON.stringify(drupalNodes.data.drupaldata.nodeQuery.entities));


  const presentationPostTemplate = path.resolve(`src/templates/presentationPage.js`)


  drupalNodes.data.drupaldata.nodeQuery.entities.map(entity  => {
  //drupalNodes.data.drupaldata.nodeQuery.entities.forEach(({ entity }) => {

    console.log(JSON.stringify(entity));



    const path = entity.entityUrl.path
   // const path = "/node/" + entity.entityId
    const entityId = entity.entityId
    createPage({
    path,
      component: presentationPostTemplate,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        entityId
      },
    })




})




// }

// drupalNoders();
}

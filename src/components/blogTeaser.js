import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"


const BlogTeaser = ({ entity }) => (
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

BlogTeaser.propTypes = {
  siteTitle: PropTypes.object,
}



export default BlogTeaser

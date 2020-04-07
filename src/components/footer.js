import { Link } from "gatsby"
import React from "react"

import TwitterIcon from "./../../assets/Twitter_Logo_WhiteOnImage.svg"

const Footer = () => (
  <footer
    style={{
      // background: `#ff0000`,
      background: `#007bff`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 800,
        padding: `1.45rem 1.0875rem`,
        textAlign: `right`,
      }}
    >
      <h4 style={{ margin: 0 }}>
        <a
          href="https://twitter.com/stevector"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          @stevector
          <TwitterIcon
            style={{
              display: `inline`,
              maxHeight: `40px`,
            }}
          />
        </a>
      </h4>
    </div>
  </footer>
)

export default Footer

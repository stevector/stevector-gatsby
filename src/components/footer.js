import React from "react"
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
            backgroundImage: `url("/Twitter.svg")`,
            backgroundRepeat: `no-repeat`,
            paddingLeft: `20px`,
            backgroundPositionX: `left`,
            backgroundSize: `auto`,
          }}
        >
          @stevector
        </a>
      </h4>
    </div>
  </footer>
)

export default Footer

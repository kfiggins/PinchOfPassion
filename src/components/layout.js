import React from "react"
import { Link } from "gatsby"

const menuItems = [
  { title: "About Me" },
  { title: "Contact Me" }
]

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  // if (location.pathname === rootPath) {
  const header = (
    <>
      <h1
        style={{
          margin: 0,
          lineHeight: "60px",
          fontSize: "60px",
          fontWeight: "200",
          textTransform: "uppercase",
          letterSpacing: "10px"
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <div style={{ fontFamily: "Caveat", fontSize: "18px", marginTop: "10px" }}>=balancing health and happiness=</div>
    </>
  )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontWeight: "200",
  //         letterSpacing: "10px",
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }



  return (
    <div
      style={{
        padding: "20px 40px"
      }}
    >
      <header style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>{header}</header>
      <div style={{ borderTop: "solid 1px black", borderBottom: "solid 1px black", height: "60px", marginTop: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {menuItems.map((item, index) =>
          <div key={index} style={{ padding: "0 20px", fontFamily: "Monsterat", letterSpacing: "2px", textTransform: "uppercase", fontSize: "11px" }}>{item.title}</div>
        )}
      </div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.linkedin.com/in/kylerfiggins/">Kyler🐐</a>
      </footer>
    </div>
  )
}

export default Layout

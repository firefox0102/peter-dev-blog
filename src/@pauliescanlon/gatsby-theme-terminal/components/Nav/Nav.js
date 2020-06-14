/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import { MdxRoutes } from "@pauliescanlon/gatsby-mdx-routes"
import { Link } from "gatsby"

import { Logo } from "../Logo"

import * as styles from "./styles"

const DUMMY = "dummy"

export const Nav = () => (
  <Fragment>
    <div sx={styles.logo}>
      <Logo />
    </div>
    <nav sx={styles.nav}>
      <MdxRoutes>
        {(routes, _) => (
          <ul sx={styles.ul}>
            {routes
              .filter(
                (route) =>
                  route.navigationLabel && route.navigationLabel !== DUMMY
              )
              .map((route, index) => (
                <li sx={styles.li} key={index}>
                  <Link
                    activeClassName="active-link"
                    to={route.slug}
                    sx={{
                      ...styles.link,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 2,
                      textTransform: "capitalize",
                      pt: 3,
                      pb: 3,
                      pl: 4,
                      pr: 4,
                      transition:
                        ".2s linear background-color, .2s linear color",
                      fontFamily: "body",
                      fontSize: 2,
                      fontWeight: (theme) => theme.fontWeights.body,
                      lineHeight: "normal",
                      textDecoration: "none",
                      outline: "none",
                      svg: {
                        marginRight: 2,
                      },

                      ":hover": {
                        color: "secondary",
                        backgroundColor: "surface",
                      },
                    }}
                  >
                    {route.navigationLabel}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </MdxRoutes>
    </nav>
  </Fragment>
)

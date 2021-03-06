/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export const Logo = () => (
  <Link
    to="/"
    sx={{
      width: "100%",
      ":focus": {
        outline: "none",
        transition: ".2s linear box-shadow",
        boxShadow: (theme) => `0 1px 0 0 ${theme.colors.primary}`,
      },
    }}
  >
    <div sx={{ height: "25px", overflow: "hidden" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130 35"
        width="130px"
        height="35px"
      >
        <g>
          <path
            sx={{ fill: "success" }}
            d="M2.6,12.5c0-5.1,4.2-9.4,9.4-9.4l0,0V0.5c-3,0-5.6,1-7.8,2.9c-5,4.4-5.5,11.9-1.2,16.9l2-1.7
				C3.5,17,2.6,14.8,2.6,12.5z"
          />
          <path
            sx={{ fill: "secondary" }}
            d="M12,21.9c-2.8,0-5.4-1.2-7.1-3.2l-2,1.7c0.4,0.5,0.9,0.9,1.4,1.3c5,4.3,12.6,3.6,16.8-1.5l-2-1.7
				C17.4,20.6,14.8,21.9,12,21.9z"
          />
          <path
            sx={{ fill: "primary" }}
            d="M12,0.5v2.6c5.1,0,9.4,4.2,9.4,9.4c0,2.3-0.8,4.4-2.2,6l2,1.7c1.9-2.3,2.8-4.7,2.8-7.7
				C23.9,5.9,18.6,0.5,12,0.5z"
          />
          <path
            sx={{ fill: "text" }}
            d="M9.9,8.9h2.4c0.5,0,1,0.1,1.4,0.3s0.6,0.4,0.8,0.8c0.2,0.3,0.3,0.7,0.3,1.1c0,0.4-0.1,0.8-0.3,1.1
				c-0.2,0.3-0.4,0.6-0.8,0.8c-0.4,0.2-0.8,0.3-1.3,0.3h-1.2V16H9.9V8.9z M12.3,12c0.4,0,0.7-0.1,0.8-0.3c0.2-0.2,0.3-0.4,0.3-0.7
				c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3h-1.1v2H12.3z"
          />
        </g>
      </svg>
    </div>
  </Link>
)

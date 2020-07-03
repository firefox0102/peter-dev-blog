import codeTheme from "@theme-ui/prism/presets/shades-of-purple.json"
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui"

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#FFFFFF",
    muted: "#8b87ea",
    textMuted: "#8b87ea",
    primary: "#f056c7",
    secondary: "#c39eff",
    textSecondary: "#c39eff",
    error: "#fb44b9",
    success: "#58e6d9",
    background: "#1D1B31",
    surface: "#2D2B4A",
  },

  styles: {
    ...baseTheme.styles,
    p: {
      a: {
        ...baseTheme.styles.p.a,
        color: "secondary",
        wordBreak: "break-word",
      },
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit",
        fontSize: "14px",
        wordBreak: "break-word",
        backgroundColor: "surface",
      },
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme,
    },
    a: {
      ...baseTheme.styles.a,
      color: "secondary",
      button: {
        cursor: "pointer",
      },
    },
    buttons: {
      ghost: {
        ...baseTheme.buttons.primary,
        color: "muted",
        backgroundColor: "background",
        transition: ".2s linear background-color",
        ":hover": {
          backgroundColor: "surface",
        },
      },
    },
    ul: {
      fontSize: "20px",
    },
  },

  cards: {
    primary: {
      ...baseTheme.cards.primary,
      transition: ".2s linear box-shadow, .2s ease-in-out transform",
      ":hover": {
        transform: "translateY(-0.25rem)",
        boxShadow: 2,
      },
    },
  },

  radii: [4, 8, 50],

  fonts: {
    ...baseTheme.fonts,
    body: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },

  fontSizes: [18, 20, 24, 32, 48, 64],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  breakpoints: ["576px", "768px", "992px", "1200px"],

  transitions: {
    sideBarTransition: ".3s ease-in-out margin-left",
  },
}

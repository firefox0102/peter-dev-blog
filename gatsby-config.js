module.exports = {
  siteMetadata: {
    title: `Pete's Dev Diary`,
    description:
      "I'm a software developer who loves React! React, StyledComponents, JavaScript, TypeScript, Storybook, React-Testing-Library, and various other languages.",
    author: `@gatsbyjs`,
    keywords: ["tech", "blog", "React", "Gatsby", ""],
    siteURL: "https://peterfinn.dev",
    siteImage: "name-of-open-graphy-image.jpg", // pop an image in the static folder to use it as og:image
    config: {
      headerHeight: 64,
      sideBarWidth: 240,
      twitter: "sleepy__pete", // no need to include the @
      github: "firefox0102",
    },
  },
  plugins: ["@pauliescanlon/gatsby-theme-gatstats"],
}

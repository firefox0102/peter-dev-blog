module.exports = {
  siteMetadata: {
    title: `Pete's Dev Diary`,
    description:
      "Hello there! I'm Peter, but you can call me Pete. I'm a software developer with a knack for Frontend, and these days you can find me working with all things React.",
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

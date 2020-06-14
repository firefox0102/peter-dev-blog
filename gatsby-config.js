module.exports = {
  siteMetadata: {
    name: "Pete's Dev Diary",
    description:
      "Hello there! I'm Peter, but you can call me Pete. I'm a software developer with a knack for Frontend, and these days you can find me working with all things React.",
    keywords: [
      "React",
      "JavaScript",
      "TypeScript",
      "StyledComponents",
      "Jest",
      "React Testing Library",
      "Storybook",
    ],
    siteUrl: "https://peterfinn.dev",
    siteImage: "",
    profileImage: `images/profile_image.png`,
    lang: `en`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts", "speaking"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter Finn`,
        short_name: `PF`,
        start_url: `/`,
        lang: `en`,
        background_color: `#282a36`,
        theme_color: `#ff79c6`,
        display: `standalone`,
        icon: `src/manifesticon-512x512.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "", // TODO:
      },
    },
  ],
}

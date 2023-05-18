import type { Site, SocialObject } from "./types"

export const SITE: Site = {
  website: "https://peterfinn.dev/",
  author: "Peter Finn",
  desc: "A site for all things related to Pete.",
  title: "Pete's Dev Hub",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
}

export const LOCALE = ["en-EN"] // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 24,
  height: 24,
}

export const githubSocial: SocialObject = {
  name: "Github",
  href: "https://github.com/firefox0102",
  linkTitle: "Find Me on Github",
  active: true,
}

export const linkedInSocial: SocialObject = {
  name: "LinkedIn",
  href: "https://www.linkedin.com/in/peter-finn-4a957a235",
  linkTitle: `Find Pete on LinkedIn`,
  active: true,
}

export const SOCIALS: SocialObject[] = [githubSocial, linkedInSocial]

import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://peterfinn.dev/",
  author: "Peter Finn",
  desc: "A site for all things related to Pete.",
  title: "Pete's Dev Hub",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/firefox0102",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/peter-finn-4a957a235",
    linkTitle: `Find Pete on LinkedIn`,
    active: true,
  },
]

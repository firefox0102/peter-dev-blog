export type Site = {
  website: string
  author: string
  desc: string
  title: string
  ogImage: string
  lightAndDarkMode: boolean
  postPerPage: number
}

export type SocialObject = {
  name: SocialMedia
  href: string
  active: boolean
  linkTitle: string
}

export type SocialIcons = {
  [social in SocialMedia]: string
}

export type SocialMedia =
  | "Github"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon"

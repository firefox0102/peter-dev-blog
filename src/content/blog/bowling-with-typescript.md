---
author: Peter Finn
pubDatetime: 2020-06-13T15:22:00Z
title: 🎳 Bowling with TypeScript
postSlug: bowling-with-typescript
featured: true
draft: false
description: My experience with rebelling, and then accepting TypeScript.
---

I have a confession to make. I feel like a complete idiot for not using TypeScript earlier in my career. After using it for an extended period of time, I don't understand how I ever lived without it. The difference in experience before and after is mind blowing, and really hard to put in to words.

However, I think I've come up with a pretty funny way to explain this that everyone could understand without too much technical jargon.

Okay. Get ready. This is my perfect TypeScript analogy.

** TypeScript is like bowling with the bumpers up. **

#### Professional Bowling

Imagine you've just got a job as a professional bowler. You have a 4 year bachelors degree in Bowling Science, but you've never actually bowled in a production environment before.

On your first day your bowling manager comes to you and lays out your 90 day plan

> "You're expected to come up with one sweet new bowling trick every week, and score at least a 150 every game in order to maintain your good standing at our very strict bowling alley"

I might be pretty decent at bowling, but I'm not sure if **EVERY** time I could break 150. My education in bowling Science was only theoretical, half the time I tend to throw a gutter ball!

You give it your best shot, but as expected you spend at least one day a week fishing your bowling ball out of the gutter where it got stuck and brought down the entire production Bowling experience. Yes, the fun strike animations are now not working due to your one tiny mistake!

<EmbeddedImage
src={props.embedded.image1}
width={["75%"]}
justifyContent="center"
/>

Seems pretty difficult, right? Now, imagine your boss comes to you and says

> "Pete, we want you to try out this revolutionary new technology called Bumpers that can help you to consistently score above 150. There's no penalty to using it, and we won't poke fun at you or question your mad bowling skills. Would you like to use it?"

Wait a minute... You're telling me that all this time there was a technology out there that could remove the hardest part of my job and we weren't using it?

#### Goodbye Gutter Balls

Now, how does TypeScript actually help you avoid the aforementioned gutter ball? Here are just a few of my favorite perks of TypeScript:

- It's a Superset of JavaScript - All JavaScript syntax works, so the learning curve is minimal!
- Static Type Checking - helps to surface errors at compile time
- Lots of tooling support gives you autocomplete and helps you spot typing errors while developing
- Third party libraries ship type definitions, helping you figure out when you're not passing them the right info
- SO MANY MORE BENEFITS!

I would equate my very average bowling skills with a vanilla JavaScript development experience. No matter how good you are, every once in a while you're going to throw a gutter ball and be up late debugging that production outage caused by a prop that you could've SWORN was a `number` but is actually a `string`. That's something that would never happen with Static Type Checking!

The funny thing is, even as a self professed JavaScript Hipster I was a little hesitant to try TypeScript. As an observer, you would obviously think that is nuts right? If I was actually bowling, you would tell me to use the bumpers! Maybe it was some concern of slowing down, the fear of the unknown, or just laziness, but I honestly should've been using this a lot earlier in my career and feel pretty dumb for not doing so.

#### That's it for now!

TypeScript is like bowling with bumpers up. It is like a safety net that can prevent you from making stupid mistakes, allowing you to focus less on constantly fishing your ball out of the gutter and more on actually creating things. TypeScript will probably save you a lot of headaches that stock JavaScript can't help you with, and I highly recommend checking it out in your projects if you like shipping quality code. 🎳

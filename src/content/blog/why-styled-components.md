---
author: Peter Finn
pubDatetime: 2020-03-26T15:22:00Z
title: 💅 Why I Use Styled Components
postSlug: styled-components
featured: true
draft: false
description: Some positive thoughts about styled components.
---

CSS in JS is definitely the wave of the future when it comes to styling a Frontend application. However, as a recovering **JavaScript Hipster**, I knew I had the tendency to adopt things before they really became stable or widely supported. Because of this, I managed to stay away from CSS in JS until Connect Tech 2018, where I first met my good buddy Ray.

When I first saw Ray Gesualdo’s excellent talk on Styled Components, my initial skepticism of CSS-in-JS melted away and I understood the potential it held. No longer would we be bound by the classic restrictions of CSS like silent failures, a completely separate tooling ecosystem, and an overload of classes in our markup. Now with CSS-in-JS we could leverage the power of JavaScript to help enhance our styling capabilities. However, this took quite a lot of discussion and debate in engineering before we finally decided on this approach.

In that spirit, here are just a few of the main points that convinced us to use it here at SalesLoft. This is by no means comprehensive, but hopefully will provide some context as to what won us over!

### Colocated Styles

Most people have a gut reaction to hearing the phrase CSS in JS that goes something like this…

`“But what about separation of concerns?“`

If you felt this way, you are not alone! For a lot of people this idea be hard to get over, ESPECIALLY because of the common principle of `Separation of Concerns`. What helped to win me over was simply a shift in midset. If you approach this concept less as `CSS-in-JS` and more as `Colocated Styles`, then you might be comfortable enough to keep an open mind!

This concept can be described in more detail as the Axis of Separation. Where does your actual axis of separation live? If you’re developing shopify themes for an application that has exactly the same DOM structure every time, then sure maybe your axis of separation is based on technologies!

### Axis of Separation

Put yourself in the shoes of a frontend developer working on a component for a React application. Most of the time your specific component has its own styles, right? Sure you've got some reusable utility classes here and there, but the bulk of the code is packaged up as one unit.

That might actually be where your axis of separation is! If your code can no longer really be separated by technologies (I.E. HTML, CSS, and JS), then the smallest unit in your app might just be a component.

In short, most of the time you can’t have a component without complex styling, so why not use the best tools possible (I.E. JavaScript) to fill in the gaps left when using CSS and SASS?

### Perks of CSS in JS

If you're not convinced by now, let me quickly go through a few big perks to adopting this approach:

- Declarative Styles (because it’s creating actual components)

- Scoped CSS <-- **No matter what technology you're using, you should 100% be doing this**

- Quick iteration, mostly thanks to scoped code that is isolated and doesn’t affect anything around it (most of the time)

- Supports server side rendering (only generates CSS that is being rendered, which is cool)

- Single File Components allow you to see all your code in one place! (this is also a concept adopted by the VueJS framework)

Here’s another huge perk when using styled components… **Styles can respond to props**! That’s right, you can use javascript in your styled components to handle all of that display logic, which declutters your JSX and allows you a much more debuggable CSS experience.

Here are some other tips about Styled Components that helped convince me:

- Styled components are regular react components and can receive props! You can pass in a function and instead of having it be coerced into a string (if the function isn’t called), when it processes the CSS it will pass props to the function as the first argument

- You can still use SASS syntax with StyledComponents

- Themes allow you to pass around your style variables easily, while also allowing extensibility and overrides

- You can combine styled components with variables and other JS features, like ES6 template literals. This allows you to do dynamic CSS values when components are rendered!

- You can extend styled components very easily, including components you import from other libraries

### That’s it for now!

Just wanted to include some info and a few pointers in case I need to give context on why we decided to use Styled Components and some of the benefits that won us over.

If you’d like to learn more about Styled Components, check out the excellent docs at https://styled-components.com/

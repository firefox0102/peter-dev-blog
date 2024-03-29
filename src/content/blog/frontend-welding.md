---
author: Peter Finn
pubDatetime: 2020-05-25T15:22:00Z
title: 👨‍🏭 Don't Weld Your Frontend Technologies Together
postSlug: welding-frontend
featured: true
draft: false
description: Some very outdated thoughts on separation of concerns in Frontend.
---

We have probably all been told at one point or another that Separation of Concerns is a wise thing to maintain. In spite of this, I find that my fellow frontend developers and I very commonly commit the sin of welding technologies together so they can never be separated again.

In the spirit of not welding your frontend technologies together, here's a post about the architectural patterns that I've used to avoid this pitfall!

### First Impressions Can Be Misleading

This may come as a surprise, but I used to be pretty opposed to redux. Although I had never really used it in depth, I was turned away by the classic arguments against it like a steep learning curve, an _imagined_ slower development speed, and the ever pervasive complaint of **boilerplate code**.

I understood the reasons that larger organizations had for using it; Redux gives you pretty manual control over your application control flow and can help you to avoid spaghetti code when you've got some complex application logic in your frontend. Still, I could never shake the JavaScript Hipster inside of me who was always screaming "I don't wanna use Redux, I can do this with Vanilla React!"

In my mind using a tool like Redux felt like driving a Stick Shift vs Automatic. I don’t know about you, but I don’t want to control every little thing about shifting gears when I can just drive an automatic and not have to worry about it.

Despite all the whining from my inner JavaScript Hipster, I recently started working on a really cool project that used Redux. Now, after working with Redux in a large application for a while, I have to say it’s growing on me!

In an enterprise application that spans multiple product surfaces, it’s often hard to trace through the code to figure out how a developer built something. Without a common pattern or predicatble behavior, you're really just hopping back in a time machine to whatever the coolest way to write React was at the time of development. **(See: JavaScript Hipsters)** However, if your team subscribes to the Redux/Flow architechtural patterns and implements them clearly, you have a predictable pattern for control flow and it only takes a little bit of digging to follow how exactly that To Do list feature you built two years ago is working.

Like any technology, Redux has plenty of flaws and pitfalls. Despite that, the patterns and predictability, along with the help of Redux-toolkit (greatly reduces the boilerplate you have to write) have won me over. In that same vein, there's one specific thing that won me over that I want to focus on -

## Clean Separation of Concerns

No matter your project size or situation, we would probably all agree that it is smart to have some sort of separation of concerns. (If you want even more fuel for this fire, check out my post titled **Lessons from the Demise of AngularJS**) So how can a technology like Redux help us achieve a clear separation of concerns without causing too much extra overhead for speed of development?

### Application Layers

I like to think of our web app in large slices, seen below. Each of these layers represents a logical bucket that you can divide our application code into. These three layers each have a specific responsibility in the app architechture, but don't necessarily relate to a specific technology and could be implemented without Redux. This is more of a mental model than a strict guide.

Let’s break each of these layers of my mental model down and talk about how we can achieve a clear separation of concerns.

#### Data Access Layer

Early in my career I would’ve considered fetching data and storing it in app state as “Business Logic.” However, I think it’s wise to separate these two concepts out for the same reason you might want to decouple your app state from your view library. Say you’ve been using Axios for a while and suddenly a cool new fetch library comes out that your team wants to start using instead.
By having a clear interface between your App Control Flow code, you can easily swap out this library with very little change. In contrast, if every single Redux Action has code that is directly invoking Axios, you’ve welded together your data fetching technology with your control flow and now have to do a lot more work to swap out technologies.

#### Control Flow Layer

This is where you dispatch events and fetch data. I won’t go into too much detail here as it’s mostly just stock Redux, but there is one thing I want to highlight about this layer. ** Selectors! **

Selectors are a newer concept to the Redux ecosystem, and we use them as an interface between the presentation layer and the app state. You might also use Containers for this, although the ability to mix, match, and combine selectors makes them a no brainer to use with or without Containers! (there's a great conversation in here about Containers vs Hooks and Separation of Concerns, stay tuned for a post along those lines)

The use of Selectors is incredibly important for this one reason: **It abstracts the shape of your application state out of your presentational layer**. Selectors allow you to keep your App State separated from some of the details your presentation layer might need.

For example, say a component needs to pull a specific piece of data out of a deeply nested object in your app state. Using selectors helps to ensure that your presentational layer doesn't know where that data comes from, nor should it care. If later you go back and refactor your app state to be less deeply nested, guess what? You only have to change your Selector code instead of the 15 components that use it!

#### Presentational Layer

This layer is important because it opens your app up to swap out your view library without having to re-write your entire application from the ground up. It also allows you to have multiple technologies running in tandem if you want to. Congrats now you can have micro-frontends, go nuts!

Some developers use the term “Presentational to refer to functional components that hold no local state. In this instance, I’m actually treating all React/Vue/Angular code as Presentational because it’s really only concerned with how to display things to the user. I prefer to keep specific pieces of local state as close to the components that need them as possible, such as the state of a dropdown menu. IMHO that’s “view” logic, not app logic.

** Note: ** I haven't shown it here, but you might even go a step further and separate out your View Library and your Styling technology. We do this by simply keeping our `CSS in JS` in separate `*.styles` files!

#### Putting it all together

Here’s a simple example that illustrates our current redux control flow in one of our apps at SalesLoft. For the sake of brevity I've done quite a bit of hand waving over some of the finer details, but hopefully you get the idea.

Now, let me point out that this is pretty much just the flow for hitting an API. Some devs might think that this is a lot of code to do something so simple, and you'd be right! Again, one of the main complaints of Redux is that there's a bit of overhead.

Although might seem like a waste of time now, by having clear boundaries in your application you will probably save yourself years of an painstaking application rewrite if your company ever decided to completely switch View libraries.

(and trust me, you will run in to that eventually)

## That's It For Now!

Although I used Redux to help implement this in our project, you can use these same patterns in lots of different ways, with lots of different technologies.

The important part is to always check in and ask:

What would happen if this new technology I'm introducing suddenly stops being supported, pivots in a direction I don't like, or is replaced by a superior tool? Is it going to be welded to our code forever?

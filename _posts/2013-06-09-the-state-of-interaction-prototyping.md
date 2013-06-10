---
layout: post
title: The State of Interaction Prototyping

---
{{ page.title }}
==============

<p class="meta">June 2013</p>

The tools for which we prototype interaction are constantly changing. For prototyping web applications, firing up a interactive environment is constantly simplifying - but looking into prototyping interaction for iOS devices, new tools are thinking in new ways.

Considering the [McLuhan adage](https://www.google.com/search?q=adage&oq=adage&aqs=chrome.0.57j5j0l2j62l2.1006j0&sourceid=chrome&ie=UTF-8#sclient=psy-ab&q=first%20we%20shape%20our%20tools%20thereafter%20they%20shape%20us&oq=&gs_l=&pbx=1&bav=on.2,or.r_cp.r_qf.&fp=701c806c0df3bf7b&biw=1440&bih=803&pf=p&pdl=300) about our tools having their way with us people, it can be helpful to look around at the opportunities afforded us by our current toolsets. Even more so, applying cross disciplinary comparisons help us see the way things might become.

Here's a few noteworthy new tools we'll take a closer look at -

  - [Ratchet](https://github.com/maker/ratchet)
  - [Framer](http://www.framerjs.com/)
  - [Quartz Composer](http://en.wikipedia.org/wiki/Quartz_Composer)
  - [Flinto](https://www.flinto.com/)

**Flinto**  
A wonderful web app for connection static images, specifically designed for prototyping iOS applications. Flinto should InVision in your iOS design process. It's much more efficient and visual for connecting views. It also offers some nice transition touches that InVision lacks (i.e. screen fades, right/left slides). Overall, it's the best tool for testing with static screens. We just wish it had a way to build navigation patterns on repeating elements - Would make it just a hair faster. Even more so, they're trying to [keep it limited](http://blog.flinto.com/post/48225271974/what-is-flinto) and simple, hopefully only more useful features to come.

**Quartz Composer**  
There was a lot of talk about Quartz Composer after Facebook announced it was extremely helpful in building the "Floating Heads" idea for Home. Afterwards, David O'Brian made some [high quality tutorials](https://www.google.com/search?q=facebook+home+quartz+composer&oq=facebook+home+quartz&aqs=chrome.1.57j0l2j62l3.5934j0&sourceid=chrome&ie=UTF-8) on rebuilding the Home interation. Overall, we think QC is an extremely helpful tool. The downside is that it's got an odd learning curve and in the end, you're prototyping interaction that's meant to be in your hand - On your desk. It's just hard to get the true feel for what an interaction is like when you're not testing in the appropriate space.

**Framer**  
Framer takes a great stab at helping designers who work out of PSD files build tappable prototypes out of JavaScript. It's got a PSD Export tool that just runs automatically and it's pretty efficient. It then has some amazing native browser inspection for building out your app. Framer is a big step forward, but its achilles heel is that you can only work on one view at a time. It's wonderful for testing your main interaction (i.e. [screen transitions](http://www.framerjs.com/editor/?example=GoogleNow), [flyout navs](http://www.framerjs.com/editor/?example=NewsFeed)) but it's unfortunate you can't test a full product. If Framer were able to support tapping between various screens and letting you feel as if you were "navigating" the app - It would be an incredibly powerful tool. More than the other tools, we highly recommend you start playing around with [Framer](http://www.framerjs.com/introduction/).

**Ratchet**  
Ratchet sits at a funny spot between awesome prototyping tool with tons of options for customizations and a mobile web app UI kit. It's an amazing amount of work (by one of the front-end geniuses who also made [Bootstrap](http://twitter.github.io/bootstrap), [fat](http://twitter.com/fat)). But, using ratchet to prototype your iOS app is a bit like using bootstrap to prototype your web app - It can be super helpful really early on. If you're having trouble "feeling" the difference between a TabBar-Nav or a Flyout-Nav with a persistent header, Ratchet is your tool. These are the types of problems it can help solve though - It's not really meant for prototyping highly customized design.

### There is still a gap ###

There is still a big hole in this process. It's not yet easy enough for product designers to make high quality prototypes of their iOS app quickly and efficiently. The static image linking and interaction afforded by tools like Framer and Flinto are incredibly powerful, but it still needs more. If Framer and Flinto could hole up for a couple nights and bring a child to the world - We could have an answer.

If there were synthesis of these tools - The Asset level integration of Framer, Product wide view connecting of Flinto and easy fire-up/UI blanking of Ratchet - We'd have a very powerful tool for prototyping iOS, or even just Mobile Interaction Design. We haven't seen any whispers of products moving in this direction, but it will be really interesting to see what Marc has been cooking up with [Skala](http://bjango.com/mac/skala/) It could be more of the "compete with sketch" direction on creating Vector assets easily. But, for a product like [Sketch](http://www.bohemiancoding.com/sketch/) or what Skala could become, building out the features for prototyping interactions is more easily reachable.

### A Totally Different Future ###

In light of all this tool pondering and connecting with the movement of Product Designers on the web getting more and more involved in the code level of their product ([David Cole](http://irondavy.quora.com/Designers-Will-Code) has done some wonderful writing on the topic). It's currently much easier and more comfortable for designers on the web to work along side the engineering team on product development. Designers are getting better at using GitHub, writing JavaScript and enjoying the speed of prototyping interaction with actual implementable code.

So, if Web Product designers are working much more on the codebase for products - Why aren't iOS Product designers getting into Xcode and working on the codebase as well? Amazingly enough, Xcode offers much more GUI based design options that ST2 and the command line working on a web product. Could it just be that Xcode or Cocoa is a much more intimidating hurdle? Do designers need more tools to bridge the gap?

Both could be the case. However, this is an interesting behavior/trend to watch. I think some other tools like [PaintCode](http://www.paintcodeapp.com/) and [Spark Inspector](http://sparkinspector.com/) are going to bridge the gap for designers to get more comfortable working on the iOS codebase.

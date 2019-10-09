---
title: "What I Don't Know (as of 2019)"
date: '2019-10-09'
spoiler: I took a new job, and suddenly I don't know anything (again).
---

At the end of September, I got a new job. Woohoo for learning new things!

At my previous position I was a full stack engineer, focusing primarily on backend, inter-service communication via REST and service bus (RabbitMQ), as well as the data model in PostgreSQL and Mongo, and touching deployment tech with Kubernetes on AWS. I also worked with front-end Angular 1.6 and some React "when I had to". 😄 I really enjoyed being able to work on cross-product libraries and solutions, so I look forward to building these out at my new company.

At my new position I'm again a full stack engineer, but in some different tech. The specific work isn't set in stone, but I'll be a core product engineer working on features, bugs, data models, service architecture, and so on. For my first month or two I'll be working with a new devops engineer on brainstorming and implementing some solutions to modernize our infrastructure, which will be a good way to dip my toes into a new ecosystem.

I've done some digging through code my first two weeks, so here's everything I found that I _don't_ know, but will be learning over the next coupla' months!

## Service tech:
- C#
  - What is C#? What main paradigms does the language have?
  - What are the main differences between C# and my most familar OOP language, Java?
  - What types does the language have?
  - What sort of operators does each type have?
  - Is there a similar concept to a prototype function in C#?
  - Are classes/functions the same as I remember from Java in school?
  - Is there an equivalent of Async/Await? Or is that not necessary?
  - What sort of syntactic sugar do we get?
  - What is LINQ?
  - Are there versions of the language, like the JavaScript ECMAScript progression?
  - Package managers? What's Nuget? How does this relate to the NPM model?
  - How is C# compiled? I see `.dll` and other files too when built. How are these related?
- .NET
  - What is .NET? Is this the same thing as ASP.NET?
  - .NET vs .NET core? What's new? What's the different between all these .NET and other 3-letter abbrevations?
  - What does .NET provide? Is it like a framework for languages speaking together? Or platform agnosticism or something?
  - Do I _have_ to use Visual Studio on Windows? Are there alternative tools? Anything on Mac? (I'm gonna miss my iMessage on Mac 😄)
  - What's a `.csproj` file? `.sln` file? How does everything "get connected" with one another? (My new codebase has a lot of `.csproj` files that seem to be connected.)
  - Are `.dll`s a C# thing or a .NET thing?
  - I've heard `.dll`s are versioned pretty well. How can we leverage that fact? (Builds, betas, releases, etc)
  - What prevents us from breaking up our monorepo into separate apps for backend and frontend (and then easily containerize)?
- Vue
  - What are the core concepts relating a HTML screen to controller functions?
  - How does data get in the "scope" of the page?
  - What are all the words used to describe Vue code? Controllers, directives, functions, services, providers, etc?
  - What's the hierarchy of scopes in Vue?
  - I think we use C# instead of JS functions? How does this work?
    - What and Why is `.CSHTML` a thing?
  - What special syntax does Vue use to put data into templates?
    - Raw data insertion
    - Structural HTML (`ng-for` `ng-repeat` alternatives)
    - Conditional, etc
  - How are events handled? Clicks/keyboard events? Cross-scope events?
  - What are the big players in 3rd party libraries? Routers, event managers, data stores, etc?
  - How is Vue adoption? If we rewrite our codebase, should we move to something else (Angular, React, Svelte)?

## Deployment tech:
- Azure App Service
  - What is an App Service?
  - Are apps deployed scalable?
  - How do apps communicate with one another?
  - What does app service provide us that we couldn't do on bare metal?
- Azure Kubernetes Service
  - What level of abstraction do we get here?
  - Can I get a `kubectl` on my command line and work in "pure" Kube?
  - What overhead does AKS require? What extra configuration?
- Azure Key Vault vs App Configuration for secrets
  - What are the downsides of one versus the other?
    - Possible response times, incompatability with other services (both inputs and outputs)
  - What would we store in either one
- Azure Service Bus
  - What underlying spec is being used?
    - Kafka, RabbitMQ, NoMQ?
  - What knowledge can I transfer from RabbitMQ topics/exchanges/queues to here?
  - How do messages get routed to the right subscriber? Or do all messages get sent everywhere and the consumer is responsible for consuming the correct ones?
- Azure Pipelines
  - What all do we get here? Gated deploys and CI and stuff? What else?
  - What are the differences between pipelines and releases?
  - What options are we given for configuration? I see YAML configuration but only in some areas, maybe this is new?
  - Artifacts are a thing again? Is this good? Or do we just use a container store?
- Azure Container Store
  - What are the main differences from Docker Hub?
  - I assume this is private by default, how do we auth? Do Azure Pipelines get free auth builtin?
- Azure Monitor
  - What sort of alerting can we get?
  - Do we have dead-man switches in case everything dies?
  - How can we monitor raw CPU and memory usage for researching bugs?
- DNS/Front Door
  - What is Front Door? I know we use it but what does it provide?
  - How are our domains registered? Is there something like Route53 provided?
- Infra-As-Code
  - What sort of version control can we put to all this? Terraform compatibilty?
  - What's HCL? Is this related and could be helpful?
  - Maybe Microsoft offers something baked in for us?

Phew! That's a lot to learn. 😂 I'm looking forward to learning more about the Microsoft world. I hope to break any preconceived notions I have about the tech, and hopefully I can bring in my existing knowledge and put it to good use. I also want to see if I can be a part of more architectural conversations, but I want to make sure I keep my noob-biased-opinions far away and come in with an open mind.

I want to follow this post up with a "here's what I've learned" post in six months or a year from now.

When I was interviewing, I talked a lot about how cheesy it is, but as engineers we really do like to learn. We like to take a new problem, apply existing knowledge, and if that's not enough learn how to fix the problem properly. I really do look forward to getting to know a new codebase, new languages, new frameworks, and a new cloud computing service, as daunting as it may seem right now.

Cheers to learning new things!
---
title: What I've Learned Over The Past Year (And A Pandemic!) - Part 1 - Services
date: 2021-05-10
spoiler: You learn a lot with a new job and a new stack. It's still stressful though!
---

A while back, I wrote a blog post about my new job. In my new role, there was a lot of new technology and a whole new backend framework that I would need to learn (.NET Core). In that post I detailed what all I didn’t know. I intended to write a quick follow up after a short time but we all know what life has been like lately. Now, a year and a half (and a whole pandemic!) later, I’ve learned a lot and I finally feel productive and self-sufficient in this new stack!

I wanted to go back and answer some of my own questions, in the hopes that others could compare the two posts and see how much growth is possible, even when you start with so many unanswered questions!

Hopefully this post won’t be too much of a laundry list. I’ve chosen to take some of the initial questions instead of all of them so as to cut down on the word count. 😄

## C# &nbsp;

**_What is C#?_**

- C# is an object oriented, strongly typed programming language created by Microsoft. [The current stable C# version is 9.0](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/configure-language-version). Being an object oriented language, there are a lot of commonalities with a language like Java, such as abstraction and inheritance.

**_What types does the language have?_**

- When I asked this question, I was coming from JavaScript which has the primitive types and Objects, and covers everything that you need. In C#, there are primitives of course, but also named derived types. We know types such as Arrays and Classes, but there’s also user-defined types that are domain-specific. I realized that JavaScript covers these types with anonymous `c#*{}` objects, whereas in C# it’s good practice to use named types to give you type safety.

**_Is there a similar concept to a prototype function in C#?_**

- In JavaScript, methods on the primitive types are called prototype functions, like `c#*Array.Map()` for instance. In C# the classes that you’re operating on will have public functions to provide functionality. Of course, the primitive types provided in C# have functions already written, like `c#*List<T>.Add(T)` method to add objects of type `c#*T` to a list.

**_Is there an equivalent of Async/Await? Or is that not necessary?_**

- Yep, C# has the concept of `c#*Task<T>` which is similar to a JavaScript `c#*Promise`, as well as Async/Await in functions. “Helper” functions like `c#*Promise.All()` also have counterparts in C#, such as `c#*Task.WhenAll(IEnumerable<Task>)`. So a lot of this knowledge transfers over very well!

**_What sort of syntactic sugar do we get?_**

- I don’t think it’s quite what I expected, but when you add in .NET Core and other libraries there is quite a lot of annotations that add in functionality, like HTTP endpoints and data validation.

**_What is LINQ?_**

- LINQ is a way to apply SQL-like queries against lists and other IEnumerables in C#. This lets you write powerful statements against collections in-memory and helps bridge the gap between writing SQL stored procedures and writing queries in-memory.

**_Are there versions of the language, like the JavaScript ECMAScript progression?_**

- Yep, there is a language [release cadence](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/configure-language-version) that aligns with .NET releases.

**_Package managers? What's Nuget? How does this relate to the NPM model?_**

- The NuGet package manager is what pulls libraries into your projects. [NuGet.org](https://www.nuget.org/) is a repository for public and private compiled C# code that you can use in your projects, all very similar to the NPM model in JavaScript!

**_How is C# compiled? I see `c#_.dll` and other files too that get built. How are these related?\***

- By default, C# projects are compiled into `c#*.dll` files when running `c#*dotnet build` on a project. The C# runtime reads the `c#*.dll` files to run the program. The compiler will provide type errors and other build-time warnings before attempting to run the code itself.

## .NET

**_What is .NET? Is this the same thing as ASP.NET?_**

- .NET is a free and open-source framework for developing applications that are able to run on multiple different hosts. ASP.NET is a (now dated) framework that is also used to write applications for the web. Both are created by Microsoft

**_.NET vs .NET core? What's new? What's the difference between all these .NET and other 3-letter abbreviations?_**

- As far as I know, .NET Core was a recent fork of functionality from .NET Framework, specifically aimed at building web applications that can run on multiple host environments. Both of these frameworks compile down to `c#*.dll` files that are run by the CLR (Common Language Runtime), which allows the code to be run across multiple platforms. Think Java and the JRE.
- A lot of developers use the modern .NET Core framework to write backends. These can be consumed by whatever frontend you want.

**_Do I *have* to use Visual Studio on Windows? Are there alternative tools? Anything on Mac? (I'm gonna miss my iMessage on Mac 😄)_**

- The JetBrains team has a full-featured cross-platform IDE named [Rider](https://www.jetbrains.com/rider/), which is pretty great. [Visual Studio for Mac](https://visualstudio.microsoft.com/vs/mac/) exists, but is thin in features and not heavily supported. You can always write in plaintext or an editor like [VS Code](https://code.visualstudio.com/), since you can run the .NET compiler via CLI.

**_What's a `c#_.csproj`file?`c#_.sln`file? How does everything "get connected" with one another? (My new codebase has a lot of`c#_.csproj` files that seem to be connected.)\***

- The `c#*.csproj` file is the declaration file for dependencies, build configurations, and versioning for a specific project. The `c#*.sln` file helps pull map projects together, so that you can run `c#*dotnet build x.sln` and the whole program will build, instead of only some code.

**_What is the MVC pattern, and how does it apply when we use Vue as a frontend framework?_**

- In .NET land, you _can_ write frontends via Razor pages that are a part of your backend solutions. If you want, you can also embed your frontend code as a Web project in your solution, which can be built and served up by a thread from the same server as your backend.
- While frontend and backend can be served by the same server, it often makes more sense to compile frontends and serve them up from a CDN or static storage, instead of relying on your backend to handle the full workload. This also makes it cleaner to split into microservices/containers and scale with Kubernetes.

**_What prevents us from breaking up our monorepo into separate apps for backend and frontend (and then easily containerize)?_**

- Nothing. In the legacy codebase I was initially onboarded onto, the web frontend was served from the same C# process. Others may only use .NET Core as a performant backend, and serve the frontend as they wish.

## Vue

- Unfortunately, I haven’t used Vue much! I know a great use case for Vue is “sprinkling in" some MVC logic when you don’t need a full fledged app. The frontend I (occasionally) work on is a modern Angular application.

## Summary

Hopefully this gives you an idea of how much you can really learn and flex your skills when onboarding onto a new tech stack. This covers just about every question I had about the “service” tech. While I initially was hesitant about .NET Core world… I think the pros might outweigh the cons with .NET Core. The jury is still out, though. 😁

My next post will cover the infrastructure and code management side of things, which Firebend delegates to Azure. Stay tuned!

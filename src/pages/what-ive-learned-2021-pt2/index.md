---
title: What I've Learned Over The Past Year (And A Pandemic!) - Part 2 - Infrastructure
date: 2021-05-18
spoiler: Answering even more questions that come with a new role! This time, more questions about the infrastructure and "meta" programming side of things.
---
In my last blog post, I went over “What I’ve Learned Over The Last Year (And A Pandemic!)”. I covered the tech/service side of things, covering C#, .NET Core, package management, and so on.

Of course, this is just the tip of the iceberg. With a new company comes a whole new infrastructure, and in this case a whole new infrastructure provider, Microsoft Azure. In my past jobs I’ve worked with Amazon Web Services and on-prem solutions, so flexing to Microsoft Azure was a fun challenge.

Now, I’m no devops engineer, but as a full-stack engineer I’m heavily involved in the health of my services, from writing C# code, to testing strategy, to deployment pipelines and Kubernetes pod health. Read on for the answers for all the questions I had as a newbie to my company!

## Azure Kubernetes Service
**What is it?**
- [AKS](https://azure.microsoft.com/en-us/services/kubernetes-service/) is a service that allows you to spin up a Kubernetes cluster. AKS abstracts away the intricacies of deploying that cluster, meaning you don’t have to handle Kube nodes (unless you really want to).

**What level of abstraction do we get here?**
- At the highest level, you can choose a region to deploy your AKS cluster and a plan to bill the running time to, and get spinning up in no time. You can also be as intricate as you want, getting down and dirty with geo-replication, node resource limits, private virtual networks, and so on and so forth. The configuration is endless so I can’t sum it up in a concise paragraph.

**Can I get a `js•kubectl` on my command line and work in "pure" Kube?**
- Of course, depending on how access control is set up for your cluster, you can do this with SSH keys, your Microsoft account via the Azure CLI, or other ways. A great way to handle this is using your existing [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/) and [Azure RBAC](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview) (Role-Based Access Control) to keep things safe and secure, while allowing easier role administration for your team members.

## Infra-As-Code
**What sort of version control can we put to all this? Terraform compatibility?**
- Since we chose Azure Kubernetes Service to spin up our cluster, we’re already abstracted a fair bit. However, it’s important to have declarative infrastructure, along with change management, so that infrastructure drift can be minimized.
- There’s a [Terraform provider for AKS](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/kubernetes_cluster), so a lot of our configuration can be done with code. Some things still can’t, though, as it seems Azure is less supported by Terraform than AWS is. An example is domain name configuration is only partially supported, so we need to manage that setup manually in the Azure portal.

## Azure App Service
**What is an App Service?**
- [Azure App Services](https://azure.microsoft.com/en-us/services/app-service/) is a quick way to deploy a web process, be it written in .NET Core, Python, NodeJS, containers, or bare metal. These deployments are fully-managed. At Firebend we use app services sparingly, generally for prototypes, since the implementation details are pretty highly abstracted away.

**Are deployed apps scalable?**
- Yes, however I’m not sure what auto-scaling options you get. It seems like app services are there for speed and ease of deployment.

**How do apps communicate with one another?**
- The same way other apps can - via the Azure Service Bus, or plain HTTP calls. I’m not sure if you can cluster multiple app services together to communicate insecurely.

**What does app service provide us that we couldn't do on bare metal?**
- Well, the abstraction is great for speed of deployment! You don’t need to know how to administer a Linux box if you just want to throw up an Express server, for instance.

## Azure Service Bus
**What underlying spec is being used?**
- Azure Service Bus is written on the AMQP 1.0 spec, similar to how RabbitMQ implements the AMQP 1.0 spec. There’s also an Apache implementation called Apache Quid.

**What knowledge can I transfer from RabbitMQ topics/exchanges/queues to here?**
- Almost all of it! Topics, queues, messages, acks, and so on. The only terminology that I haven’t used in relation to Azure Service Bus is exchange, which I think is where ASB comes in.

**How do messages get routed to the right subscriber? Or do all messages get sent everywhere and the consumer is responsible for consuming the correct ones?**
- Depending on the type of queue you configure, you can have a broadcast (named multicasting), topic subscriptions, or a simple queue and consumer model.

## Azure Pipelines
**What all do we get here? Gated deploys and CI and stuff? What else?**
- Oh boy. [Azure Devops](https://azure.microsoft.com/en-us/services/devops/) has everything. Task management, code and pull requests, continuous integration for commits on branches, release pipelines with manual/automated gates, and so on. ADO is hefty but powerful.

**What are the differences between pipelines and releases?**
- At a high level they are really similar. In practice, releases should be used to handle deployments, manual intervention, and that kind of thing. Pipelines are generally used for building on push. Of course, you can make the functionality overlap, or only use pipelines if you wanted.

**What options are we given for configuration? I see YAML configuration but only in some areas, maybe this is new?**
- Yeah, this is new! YAML configuration for Azure Pipelines is a modern thing. Releases aren’t configured by YAML, but Pipelines can be configured and tracked in your Git history with the rest of your code.

**Artifacts are a thing again? Is this good? Or do we just use a container store?**
- Haha, yes, they are a thing for a compiled code world. This helps us deploy the exact code that unit tests ran on, for instance. In the .NET Core backend world, you can push versions to a [Nuget repository](https://nuget.org) or a private Azure package feed, and then dependent projects can consume those artifacts as well.

## Azure Container Store
**What is it?**
- [ACS](https://azure.microsoft.com/en-us/services/container-registry/) is a private registry for Docker images. We pair it with our Kubernetes clusters to securely build, push, and deploy Docker images to our different environments.

**I assume this is private by default, how do we auth? Do Azure Pipelines get free auth builtin?**
- Well, that's not a great assumption to make (😆), but it's true in this case. The Azure CLI handles auth for local development, and in pipelines the task runner can authenticate and push to these container stores.

**What are the main differences from Docker Hub?**
- Not a ton - perhaps pricing? Discoverability? Docker Hub seems to have the backing of the Docker company and the open source world that stores containers in their registry.


## Summary
Okay, soooo these posts are a bit different from one another, however, it’s my opinion that a modern developer needs to be able to contribute to all parts of the life cycle for their services. I’m firmly against “throwing my code over the wall” to QA to test, or Devops to deploy out. I think it’s important to be responsible for all the health of my services, from writing the code on my local machine to deploying out to our production environment.

Hopefully these posts have inspired you to keep going if you're feeling imposter syndrome or out of your depth. Change can be daunting, but an important part of our profession is learning and constantly challenging ourselves.

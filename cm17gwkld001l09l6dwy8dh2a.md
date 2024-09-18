---
title: "ACTIVITY: Angular Basic Routing"
datePublished: Wed Sep 18 2024 06:14:09 GMT+0000 (Coordinated Universal Time)
cuid: cm17gwkld001l09l6dwy8dh2a
slug: activity-angular-basic-routing
tags: angularjs

---

Task: Create a simple Angular project with basic routing and four components: **login**, **signup**, **homepage**, and **landing page**. The project will showcase using Angular routing to navigate between these components.

---

### First open up the terminal, in my case bash terminal. I am running `pwd` to find out the working directory where I am currently. Then after that, I use `cd` to change the directory to the desired folder—in my case `D:/Projects`. After that, I run the command `ng new AngularBasicRouting` to get the boilerplate and setup files ready.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726615339462/f9a605be-97dc-47b0-9b7e-21fcd2ae5fe6.png align="center")

### To check if the project is created I run ls (list directory) to get the lists of all folders on my current working directory. Notice we already have it, In the AngularBasicRouting folder we do the `cd` command once again to get to that folder.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726616088501/ac0bfd1e-d4af-4599-a5c7-640316d2508b.png align="center")

### After doing the cd command running the `ng g c login && ng g c signup && ng g c homepage && ng g c landing-page` gives us 4 total components. g is short for generate and c is for component and the ampersand just chains the different commands into a single command.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726616278113/60b36ae4-6889-44e0-bd88-591e7d646813.png align="center")

### Run the `code .` to open the vs code on that current working directory:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726636881460/2e5846bd-d7df-4446-bf27-7fd64d593741.png align="center")

### Running the `ng s` will give this boilerplate code:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726636974158/1cab4b66-3b17-4f79-98ab-e1d6ba059c05.png align="center")

### Go to the VSC menu by clicking the `Ctrl + Shift + G G` the let’s add a commit message in this case short yet meaningful ‘added new pages component’ then commit and push

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726637083974/7931ef17-17e6-430c-bc7f-0eee767439b2.png align="center")

### Click public branch:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726637154263/2809cf3c-ac3a-42c6-9639-bb37443aa4a6.png align="center")

### A small window will appear hit enter it’ll create a repository for you (streamlined):

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726637172312/58cf358d-e8ab-4e86-bfd9-704482ef1e7d.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726637238683/3ccd153d-ae40-4ac2-9f7e-913870be2308.png align="center")

### Adding some tweaks to have a clean import using @ path resolution (highly optional):

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726637695282/16c160fa-8e57-4d09-b923-06c00937b73e.png align="center")

### Edit the `app.route.ts` as follows to get things working on routing. The right side is the changes. We’re adding components that earlier we generated using angular CLI command as follows:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726638016650/44c9f04d-b05e-4b0e-a302-4713074b4b51.png align="center")

### And on the `app.component.ts` We’re removing the template URL as this file's role is to enable routing.:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726638184168/b4fd67d8-735a-4bb3-947c-9323e195eb24.png align="center")

### Next, we’ll create a reusable navbar:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726638419036/b9ac207c-8d5c-4f5a-ad6e-5a96a56395b3.png align="center")

### Next up we’ll use that reusable navbar as follows:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726638716401/e3696697-91ff-4efb-ad86-e43b49b598ff.png align="center")

### In the figure above, we import it from its directory after we import it into the `@Component` Decorator

Then after importing it, the selector property of it will be available inside the HTML:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726638859143/c16420fd-2366-49ec-b9bd-112f4ae70f52.png align="center")

### Looking at the current state of the app at `localhost:4200`:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726638917756/7d0f72f0-f3f2-444f-9d97-4618f81b0ddf.png align="center")

### Now let’s tweak the navbar component ts and HTML files:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639204852/10dd6d00-a447-4ec3-a1a9-ff4d5cc48904.png align="center")

### Then we leverage the Emmet Abbreviate to generate a nav items and link:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639087919/15fb8233-53ec-4815-bdbf-1b45c9624e76.png align="center")

### We’re going to use the `routerLink` attribute from `RouterLink` we’ve imported. Make sure the URL matches:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639177829/7f91af91-e04b-43b2-bb0b-3e4dfa39fd7a.png align="center")

### Then we got this:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639452771/3f40fc67-3048-4efd-bbac-b3f3a3702a8e.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639466210/fe3d105a-1617-4a07-b0db-99a391f6d206.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639482625/cbab2eae-0c38-4405-affd-7c523ec3a047.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639501176/434e0391-5821-4f36-8f2b-7921630e18b7.png align="center")

### This angular app looks as follows:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639880652/d2c60c1e-0675-4212-9576-c46ddddfedba.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639833795/65f4d6d6-38de-4aa6-a137-a71bc5ad5cb9.gif align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1726639955526/c0256d8c-838d-4203-8f53-908b2f7b7bc0.png align="center")

### Don’t forget to commit the changes and push it to the GitHub

Repository link: [froilanimnida/AngularBasicRouting (github.com)](https://github.com/froilanimnida/AngularBasicRouting)

# That’s all for Basic of angular routing.
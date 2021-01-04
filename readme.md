# Gimme Cheats

[Visit it here](https://gimme-cheats.vercel.app/)

This is a full stack project aimed to help creating cheat-sheets - a pieces of paper that contain lists of words with their translations to use during some tests. Of course I do not endorse the behavior, but I saw the niche that needed to be filled so I'm creating a tool for it.

It still needs a lot of love to be called finished, in fact it's far from done. What it can do is the main task, which is to take in a list of words and spit out a neatly formatted cheatsheet in form of a Word document.
What's left to be done is saving the cheatsheets to the database, to be available for others so you don't even have to input the words if someone's already done it.

## Tech used

### Frontend

- Next.js (with TypeScript) - used as a frontend framework because of the tiny bit of server-side rendering that's happening and neat organization of files which really suits my liking
- Mobx with mobx-state-tree - for state management. Great when using TypeScript to shout at me when I do stupid stuff
- Chakra.ui - UI library which this whole thing is built around.

### Backend

- NestJS - Backend framework that has a opinions on how to do a lot of things (which I love) and helps me stay organized. I'm using it as a GraphQL server, without the normal CRUD functionality
- PostgreSQL - Database of choice. I chose this DB because I've worked with it before, I know I can get a free tier on heroku for it too and there are a lot of tools made to work with it, just like
- TypeORM - a ORM that I really like, because it just adds that neat abstraction for communicating with the DB in form of working with TypeScript classes and methods on them.

### Note-worthy

- Lerna and Yarn Workspaces for managing a monorepo
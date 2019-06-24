# Eleventy CSS Workflow

[Eleventy](https://www.11ty.io/) doesn't come with asset management on its own. It's actually a good thing so that we can use whatever fits our usecase. So, here I used postcss to process [Tailwind CSS](https://tailwindcss.com/). You may replace Tailwind with your favorite CSS framework or just remove Tailwind.

This is not an original idea. It's copied from https://github.com/jevets/crittercomics. So, the full credit goes to [Steve Jamesson](https://github.com/jevets).

## How to use

- run `npm install` to install the prerequisites.
- run `npm run dev` or `npx eleventy --serve` to start (eleventy) development server on port `8080`.

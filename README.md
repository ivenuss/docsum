<a href="https://docsum.vercel.app">
  <p align="center">
    <img height=100 src="https://user-images.githubusercontent.com/43939822/173812748-01d7a710-5255-40c7-8660-25cd9355cc02.svg"/>
  </p>
</a>
<p align="center">
  <strong>Responsive documentation layout for your future projects 📚</strong>
</p>

---

## Goal

The main goal of this project was to learn how to create dynamic documentation that is automatically rendered from MD/MDX content and to learn some new technologies.

## Design

The documentation layout was inspired by [NuxtJS](https://nuxtjs.org/) and [Tailwind CSS](https://tailwindcss.com/), because I think their layout is one of the best according to UI/UX. I added more features and changed the UI.

## Technologies

The website is built on [Next.js](https://nextjs.org/), because I think it's currently the best solution for SEO according to documentation and static generation. It is hosted on [Vercel](https://vercel.com/)

Some functions according to Contentlayer library were taken from the Contentlayer [website](https://www.contentlayer.dev/), because there is not much documentation yet.

- **Framework**: [Next.js](https://nextjs.org/)
- **Styles**: [Tailwind CSS](https://tailwindcss.com/)
- **Content Buuilder**: [Contentlayer](https://www.contentlayer.dev/)
- **Search Component**: [kbar](https://github.com/timc1/kbar)

## Configuration

- `/content/docs` - the folder of documentation content _(actual content as placeholder is borrowed from [Next.js](https://github.com/vercel/next.js/tree/canary/docs))_
- `/src/config/sidebar.ts` - set `slug` of pages that you want to be visible in sidebar `pages['directory/filename']`

## Use

⚠ If you want to use this project, please read the [LICENSE](https://github.com/ivenuss/docsum/blob/master/LICENSE.txt) first

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for TypeScript

The app is the first of two code examples making use of the two [Atlas Content Modeler(ACM) Plugin](https://wordpress.org/plugins/atlas-content-modeler/) on the WordPress site

To make use of this example code, or some parts of it, clone the repository or create the app from scratch as described below whereupon you can copy the code you find relevant for your project from the components, hooks, lib and pages folders)

```code
npx create-next-app@latest --ts nextpressatlas
```

and thereafter prepared for use of Tailwindcss

```code
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Change the tailwind.config.js file as follows:

```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
```

To allow images from the WP site register the domain name of the site in the next.config.js file as follows:

```js
module.exports = {
  images: {
    domains: ['nextpressatlas.wpengine.com'],
  },
};
```

Replace the content of the styles/globals.css file with the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

See the [Tailwind CSS with Next.js documentation](https://tailwindcss.com/docs/guides/nextjs) for further details

See the Tailwind blogpost about further details on the use of Tailwindcss in this app.

Add the following code to the tsconfig.json file to more easily refer to these folders:

```code
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"],
      "@/styles/*": ["styles/*"],
      "@/lib/*": ["lib/*"],
      "@/hooks/*": ["hooks/*"],

    }
```

Create a .env.local file and register your GraphQL endpoint.

```
NEXT_PUBLIC_WORDPRESS_API_URL=https://yoursite.com/graphql
```

## Backend requirements

Install the following plugins on your WordPress site:

- WPGraphQL
- Atlas Content Modeler
- [WPGraphQL CORS](https://github.com/funkhaus/wp-graphql-cors) by Funkhaus
- [Headless WP Email Settings](https://github.com/kellenmace/headless-wordpress-email-settings) by Kellen Mace

Create the ACM models by importing the JSON file in the assets directory of the app.

Use the WPGraphQL CORS settings to accept your app site and tick the following boxes:

- Add Site Address to "Access-Control-Allow-Origin" header
- Send site credentials.
- Enable login mutation
- Enable logout mutation

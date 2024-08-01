# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript. This example also shows how to use Jest with the App Router and React Server Components.

> **Note:** Since tests can be co-located alongside other files inside the App Router, we have placed those tests in `app/` to demonstrate this behavior (which is different than `pages/`). You can still place all tests in `__tests__` if you prefer.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-jest&project-name=with-jest&repository-name=with-jest)

## How to Use

Quickly get started using [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app#readme)!

In your terminal, run the following command:

```bash
npx create-next-app --example with-jest with-jest-app
```

```bash
yarn create next-app --example with-jest with-jest-app
```

```bash
pnpm create next-app --example with-jest with-jest-app
```

## Running Tests

```bash
npm test
```

```
with-jest-app
├─ .gitignore
├─ .swc
│  └─ plugins
│     └─ v7_windows_x86_64_0.106.15
├─ jest.config.js
├─ jest.setup.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ vercel.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ index.module.css
│  │  ├─ layout.tsx
│  │  └─ _app.tsx
│  └─ pages
│     └─ home
│        └─ index.tsx
├─ styles
│  └─ global.css
├─ tsconfig.json
├─ types.d.ts
└─ __tests__
   ├─ index.test.tsx
   ├─ snapshot.tsx
   └─ __snapshots__
      └─ snapshot.tsx.snap

```
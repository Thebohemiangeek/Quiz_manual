# Next.js + Quiz Manual app

This is an app built for the Manual.co coding challenge.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript.Includes JEST and react testing library.

## Deployed in Vercel

Check out the deployed app at: [https://quiz-manual.vercel.app/)

## How to Use

In your terminal, run the following command:

```bash
npm install
```

```bash
npm run dev
```

## Running Tests

```bash
npm test
```

```project-tree

Manual-app
├─ app
│  ├─ landing-page
│  │  ├─ components
│  │  │  ├─ Footer
│  │  │  │  ├─ Footer.module.css
│  │  │  │  └─ Footer.tsx
│  │  │  ├─ Hero
│  │  │  │  ├─ Button
│  │  │  │  │  ├─ Button.module.css
│  │  │  │  │  └─ Button.tsx
│  │  │  │  ├─ hero.module.css
│  │  │  │  └─ Hero.tsx
│  │  │  ├─ Modal
│  │  │  │  ├─ Modal.module.css
│  │  │  │  └─ Modal.tsx
│  │  │  ├─ Quiz
│  │  │  │  ├─ Question.tsx
│  │  │  │  ├─ Quiz.module.css
│  │  │  │  └─ Quiz.tsx
│  │  │  └─ Section
│  │  │     ├─ MainSection.tsx
│  │  │     ├─ Section.module.css
│  │  │     └─ Section.tsx
│  │  └─ page.tsx
│  ├─ layout.tsx
│  └─ page.tsx
├─ jest.config.js
├─ jest.setup.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ data
│  │  ├─ footer.json
│  │  ├─ quiz.json
│  │  └─ section.json
│  ├─ favicon.ico
│  ├─ fonts
│  │  ├─ TT Norms Pro Light.otf
│  │  ├─ TT Norms Pro Medium.otf
│  │  ├─ TT_Norms_Pro_Bold.otf
│  │  └─ TT_Norms_Pro_Regular.otf
│  ├─ img
│  │  ├─ clinician.png
│  │  ├─ erectiledisfunction.png
│  │  ├─ hairlossman.png
│  │  └─ HeroBackground.png
│  └─ Logo
│     └─ Logo.svg
├─ README.md
├─ styles
│  └─ global.css
├─ tsconfig.json
├─ types.d.ts
└─ __tests__
   ├─ landing-page
   │  ├─ components
   │  │  ├─ Footer.test.tsx
   │  │  ├─ Hero.test.tsx
   │  │  ├─ Modal.test.tsx
   │  │  ├─ Question.test.tsx
   │  │  ├─ Quiz.test.tsx
   │  │  └─ Section.test.tsx
   │  └─ landing-page.test.tsx
   ├─ snapshot.tsx
   └─ __snapshots__
      └─ snapshot.tsx.snap

```

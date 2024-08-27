### Quick

## Description

This project is a comprehensive web application built with Next.js, Prisma, and TypeScript. It integrates various features such as task management, link management, and WhatsApp message handling. The application allows users to create, update, and manage tasks and links. Additionally, it supports WhatsApp integration, enabling users to send and receive messages that trigger specific actions within the app. The app is deployed on Vercel and uses a PostgreSQL database managed via Prisma ORM.

# Features

- Task Management: Create, update, and manage tasks with deadlines
- Link Management: Add, edit, and delete links with associated metadata fetched from APIs like YouTube.
- WhatsApp Integration: Interact with the app via WhatsApp messages, including creating tasks and links directly from the chat.
- User Authentication: Secure user authentication implemented with NextAuth, including Google Sign-In.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://githubcom/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

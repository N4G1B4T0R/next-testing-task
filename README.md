This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## [Demo](https://next-testing-task-a7kf.vercel.app/auth/login)

Key Features:
- 👑 Feature sliced design [link](https://feature-sliced.design/)
- 📈 React 18 new features (useFormState)
- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- 🚪 Logout functionality
- 🛡️ Protect API Routes
- 🔑 Change password
- ✅ Code-splitting, Cashing, Image-optimization, SE0

### Prerequisites

**Node version 18.7.x**

### Cloning the repository

```shell
git clone https://github.com/N4G1B4T0R/next-testing-task.git
```
```shell
cd next-testing-task
```
### Install packages

```shell
npm i
```

### Setup .env file

Generate AUTH_SECRET please use this command

```bash
openssl rand -base64 32
```
if you want to check `GITHUB_CLIENT_ID/GITHUB_CLIENT_SECRET` and` GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET` and credentials
Please guide this [article](https://mattermost.com/blog/add-google-and-github-login-to-next-js-app-with-nextauth/) to get auth with google and github

```js
  GITHUB_CLIENT_ID =
  GITHUB_CLIENT_SECRET =
  GOOGLE_CLIENT_ID =
  GOOGLE_CLIENT_SECRET =
  AUTH_SECRET =
  AUTH_URL = 'http://localhost:3000/api/auth'
  BASE_URL = 'https://auth-qa.qencode.com'
```

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

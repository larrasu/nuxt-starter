# ❇️ My Nuxt Starter

This is my personal Nuxt starter template.
I use it whenever I spin up a new project so I do not have to reconfigure the same things every time.

I made it public mainly so I can install it quickly using `pnpm create nuxt@latest`.
If someone else finds it useful, cool. If not, that is totally fine too.

## ✨ Tech Stack

This starter comes preconfigured with tools I usually reach for:

• **Nuxt 4 Ready**  
• **NuxtHub**, database and object storage  
• **Nuxt Content**, file based CMS  
• **Nuxt UI**, UI components and styling utilities  
• **Nuxt Better Auth**, authentication  
• **Drizzle ORM + SQLite**, type safe database layer  
• **ESLint**, linting and formatting  
• **Cloudflare Wrangler config**, edge deployment ready  

Nothing fancy, just enough to get me productive fast.

## 🚀 Quick Start

Create a new Nuxt project using this template:

```bash
pnpm create nuxt@latest -t github:larrasu/my-nuxt-starter
```

## ⚙️ Included Nuxt Modules
**Nuxt ESLint**
Basic linting setup so I do not have to think about it.

**NuxtHub**
Provides database and storage support optimized for Nuxt and Cloudflare environments.

**Nuxt Content**
Lets me write content in Markdown and turn into blogs or documentation.

**Nuxt UI**
Prebuilt UI components and composables I am already familiar with.

**Nuxt Better Auth**
Authentication helpers with session and provider support.

## 🔧 Available Scripts
```
pnpm dev                  # Start development server
pnpm build                # Build for production
pnpm deploy-cloudflare    # Deploy to Cloudflare
pnpm db:migrate           # Apply migrations on remote
pnpm lint                 # Run ESLint
pnpm lint:fix             # Fix linting
```

## ☁️ Deployment Notes
This project includes a [`wrangler.jsonc`](/wrangler.jsonc) file for Cloudflare deployments.
You will likely need to configure:
- Database bindings
- Storage buckets
- Environment variables
- Authentication secrets

## 🤝 Using This Template
Feel free to use or fork this starter.
It is opinionated and reflects how I personally build Nuxt apps.
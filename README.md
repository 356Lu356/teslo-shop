# teslo-shop

Tienda virtual con Next.js

## Run in dev

1. Clone repository
2. Create a copy of `.env.template` and rename it to `.env` and change the environment variables.
3. Install dependencies `npm install`
4. Raise the database `docker compose up -d`
5. Run Prisma migrations `npx prisma migrate dev`
6. Run seed `npm run seed`
7. Run the project `npm run dev`

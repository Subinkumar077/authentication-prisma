# Auth App - Next.js Authentication System

A modern, full-stack authentication application built with Next.js 16, Prisma 7, PostgreSQL, and Tailwind CSS.

## Features

- 🎨 Beautiful gradient UI with glass-morphism effects
- 🔐 User registration (signup) with form validation
- 🔑 User authentication (signin) interface
- 💾 PostgreSQL database with Prisma ORM
- ⚡ Next.js App Router with TypeScript
- 🎯 API routes for user management
- 📱 Fully responsive design
- ✨ Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma 7.2.0
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **Runtime**: Node.js

## Getting Started

### Prerequisites

- Node.js 20+ installed
- PostgreSQL database (or Neon account)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>

```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
DATABASE_URL='your_postgresql_connection_string'
```

4. Generate Prisma Client:
```bash
npx prisma generate
```

5. Run database migrations:
```bash
npx prisma migrate dev
```

6. (Optional) Seed the database:
```bash
npx tsx prisma/seed.ts
```

7. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── app/
│   ├── api/v1/signup/      # API route for user registration
│   ├── signin/             # Sign in page
│   ├── signup/             # Sign up page
│   ├── generated/prisma/   # Generated Prisma Client
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── prisma/
│   ├── schema.prisma       # Database schema
│   ├── seed.ts             # Database seeding script
│   └── migrations/         # Database migrations
└── prisma.config.ts        # Prisma configuration

```

## Database Schema

```prisma
model User {
  id       Int    @id @default(autoincrement())
  username String @unique
  email    String @unique
  password String
}
```

## API Endpoints

### POST `/api/v1/signup`
Register a new user.

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Account created successfully"
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma generate` - Generate Prisma Client
- `npx prisma migrate dev` - Run migrations
- `npx tsx prisma/seed.ts` - Seed database

## Features in Detail

### Authentication Pages
- **Home Page**: Landing page with navigation to sign in/sign up
- **Sign Up**: User registration with username, email, and password
- **Sign In**: User authentication interface

### UI/UX
- Gradient background (purple to blue)
- Glass-morphism card design with backdrop blur
- Smooth hover animations and scale transforms
- Form validation and error handling
- Loading states for better UX
- Responsive design for all screen sizes

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

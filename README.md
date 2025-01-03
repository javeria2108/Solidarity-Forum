Event Management Platform

Overview

This platform is a comprehensive event management system that allows users to create, manage, and participate in events. It provides role-based functionality for users, organizers, and administrators. The project is currently under development and is built using Prisma, PostgreSQL, Next.js, and Supabase.

Features

Role-Based Access: Separate roles for users, organizers, and admins.

Event Management:

Create, update, and delete events.

Set event details like title, description, location, capacity, and dates.

User Participation:

Register for events.

Donate to events with specified amounts and currencies.

Category Support (Planned):

Categorize events for better organization and filtering.

Real-Time Notifications (Future Work):

Notify users of updates, registrations, or cancellations.

Responsive Design:

Optimized for various devices.

Tech Stack

Frontend: Next.js with Tailwind CSS

Backend: Prisma ORM, Supabase, PostgreSQL

Authentication: NextAuth.js

Deployment: Vercel

Prisma Schema

The project uses a well-structured Prisma schema for database interactions. Here are the primary models:

User Model

Defines user data, roles, and relationships with events, registrations, and donations.

model User {
  id             String       @id @default(uuid())
  email          String       @unique
  password       String
  username       String       @unique
  name           String
  role           UserRole     @default(USER)
  createdAt      DateTime     @default(now())
  updatedAt      DateTime     @updatedAt
  events         Event[]      @relation("OrganizerEvents")
  registrations  Registration[]
  donations      Donation[]
}

Event Model

Defines event details and relationships with users, registrations, and donations.

model Event {
  id              String        @id @default(uuid())
  title           String
  description     String
  startDate       DateTime
  endDate         DateTime
  location        String
  capacity        Int
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
  organizerId     String
  organizer       User          @relation(fields: [organizerId], references: [id], name: "OrganizerEvents")
  registrations   Registration[]
  donations       Donation[]
}

Installation

Prerequisites

Node.js (>= 16.x)

PostgreSQL

Prisma CLI (npm install -g prisma)

Steps

Clone the repository:

git clone https://github.com/your-username/event-management-platform.git
cd event-management-platform

Install dependencies:

npm install

Configure the environment variables:

Create a .env file in the root directory.

Add the following:

DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

Apply database migrations:

npx prisma migrate dev

Start the development server:

npm run dev

Open the application in your browser:

http://localhost:3000

Development Roadmap



Contributing

We welcome contributions! If you'd like to contribute:

Fork the repository.

Create a new branch:

git checkout -b feature/your-feature-name

Commit your changes:

git commit -m "Add your feature description"

Push to the branch:

git push origin feature/your-feature-name

Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

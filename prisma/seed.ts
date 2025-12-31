import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const userData: Prisma.UserCreateInput[] = [
    {
        username: "alice",
        email: "alice@example.com",
        password: "password123",
    },
    {
        username: "bob",
        email: "bob@example.com",
        password: "password456",
    },
];

async function main() {
    console.log("Seeding database...");
    
    for (const user of userData) {
        await prisma.user.create({ data: user });
        console.log(`Created user: ${user.username}`);
    }
    
    console.log("Seeding completed!");
}

main()
    .catch((e) => {
        console.error("Error seeding database:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
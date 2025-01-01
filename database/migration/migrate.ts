import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

async function main() {
    try {
        const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });
        console.log("Starting database migration...");
        await migrate(drizzle(migrationClient), {
            migrationsFolder: "./database/migration",
        });
        console.log("Database migration completed successfully.");
        await migrationClient.end();
    } catch (error) {
        console.error("Error during migration:", error);
        process.exit(1);
    }
}

main();


// import "dotenv/config"

// import { drizzle } from "drizzle-orm/postgres-js"
// import { migrate } from "drizzle-orm/postgres-js/migrator"
// import postgres from "postgres"

// const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });

// async function main() {
//     await migrate(drizzle(migrationClient), {
//         migrationsFolder: "./database/migration"
//     })
//     const migrationClient: postgres.Sql<{}>
//     await migrationClient.end()
// }

// main()
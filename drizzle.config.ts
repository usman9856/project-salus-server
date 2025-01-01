import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "database/schema",
    out: "database/migration",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true
})
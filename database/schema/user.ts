import { pgTable, uuid, varchar, serial } from "drizzle-orm/pg-core"


export const UserTable = pgTable("users", {
    id: serial().primaryKey(),
    name: varchar("name", { length: 255 }).notNull()
})
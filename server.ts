import { db } from "./database/db"
import { UserTable } from "./database/schema/user"
import "dotenv/config"
async function main() {
    console.log("Running Server");
    await db.insert(UserTable).values({
        name: "Usman",
    })
    const user = await db.query.UserTable.findFirst();
    console.log("User: ", user)
    console.log("Server Shutdown");
}

main()

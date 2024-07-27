import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

export const urls = sqliteTable("urls", {
  id: text("id")
    .$defaultFn(() => nanoid())
    .primaryKey(),
  destinationUrl: text("destination_url", { length: 2048 }).notNull(),
});

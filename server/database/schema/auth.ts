import { randomUUID } from 'uncrypto'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: text().primaryKey().$default(() => randomUUID()),
  name: text().notNull(),
  email: text().unique().notNull(),
  password: text().notNull(),
  avatar: text(),
  createdAt: text().notNull().$defaultFn(() => sql`(current_timestamp)`),
  updatedAt: text().notNull().$defaultFn(() => sql`(current_timestamp)`).$onUpdateFn(() => sql`(current_timestamp)`),
})

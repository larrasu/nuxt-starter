import { randomUUID } from 'uncrypto'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: text().primaryKey().$default(() => randomUUID()),
  name: text().notNull(),
  email: text().unique().notNull(),
  password: text(),
  avatar: text(),
  createdAt: integer({ mode: 'timestamp_ms' }).$default(() => new Date()),
  updatedAt: integer({ mode: 'timestamp_ms' }).$onUpdate(() => new Date()),
})

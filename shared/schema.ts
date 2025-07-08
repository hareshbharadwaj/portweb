import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  features: jsonb("features").notNull(),
  technologies: jsonb("technologies").notNull(),
  links: jsonb("links"),
  category: text("category").notNull(),
  image: text("image"),
  detailedDescription: text("detailed_description"),
  projects: jsonb("projects"), // for sub-projects
  applications: jsonb("applications"), // for android apps
  userFeatures: jsonb("user_features"),
  adminFeatures: jsonb("admin_features"),
  methodology: jsonb("methodology"),
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

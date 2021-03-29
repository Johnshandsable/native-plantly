-- CREATE DATABASE "plantly";

-- user table 
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "location" VARCHAR(80) NOT NULL
);

-- garden sections table 
CREATE TABLE "garden_sections" (
	"id" SERIAL PRIMARY KEY, 
	"name" VARCHAR(1000) NOT NULL,
	"user_id" INT REFERENCES "user");

-- plants table 
CREATE TABLE "plants" (
  "id" SERIAL PRIMARY KEY, 
  "user_id" INT REFERENCES "user",
  "trefle_slug" VARCHAR(1000) NOT NULL,
  "section_id" INT REFERENCES "garden_sections" ON DELETE CASCADE
);

-- optional drop tables 
-- DROP TABLE "garden_sections";
-- DROP TABLE "plants";
-- DROP TABLE "user";
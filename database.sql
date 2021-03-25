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

-- dummy data for populating the first garden section 
INSERT INTO "garden_sections" ("name", "user_id")
VALUES ('Frontyard', 5);

-- optional drop tables 
-- DROP TABLE "garden_sections";
-- DROP TABLE "plants";
-- DROP TABLE "user";

-- test queries 
-- SELECT "name" FROM "garden_sections" WHERE "user_id" = 1;
-- INSERT INTO "garden_sections" ("name", "user_id") VALUES ('backyard', 5);

-- INSERT INTO "plants" ("user_id", "trefle_slug", "section_id") VALUES ();

-- DELETE FROM "garden_sections" WHERE "id" = 1 AND "user_id" = 5;

-- SELECT "id", "name" FROM "garden_sections" WHERE "user_id" = 5;

-- UPDATE "garden_sections"
-- SET "name" = 'frontyard'
-- WHERE "user_id" = 5; 

-- SELECT * 
--   FROM "garden_sections" 
--   JOIN "plants" ON "plants".section_id = "garden_sections".id;
  
-- SELECT *
--   FROM "garden_sections" 
--   JOIN "plants" ON "plants".section_id = "garden_sections".id
--   WHERE "garden_sections".user_id = 5 AND "garden_sections".id = 1;
  
-- DELETE 
-- FROM "plants"
-- WHERE "user_id" = 5 AND "id" = 1 AND "section_id" = 3;

-- SELECT "plants".id, "trefle_slug"
--         FROM "garden_sections" 
--         JOIN "plants" ON "plants".section_id = "garden_sections".id
--         WHERE "garden_sections".user_id = 5 AND "garden_sections".id = 1;
        
-- DELETE 
--   FROM "plants"
--   WHERE "user_id" = 5 AND "id" = 2 AND "section_id" = 1
--   RETURNING "section_id";

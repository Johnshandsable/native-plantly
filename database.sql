
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- CREATE DATABASE "plantly";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "location" VARCHAR(80) NOT NULL
);

CREATE TABLE "plants" (
  "id" SERIAL PRIMARY KEY, 
  "user_id" INT REFERENCES "user",
  "trefle_id" INT NOT NULL,
  "natureserve_id" INT NOT NULL
);
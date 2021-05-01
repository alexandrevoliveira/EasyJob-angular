-- DROP DATABASE IF REQUIRED --

DROP DATABASE IF EXISTS easyjob;
CREATE DATABASE easyjob;

-- DROP ONLY ROWS IN CASE U NEED TO USE SEED.JS --

truncate table candidates RESTART IDENTITY cascade;
truncate table companies RESTART IDENTITY cascade;
truncate table vacancies RESTART IDENTITY cascade;

-- CREATE TABLES --

CREATE TABLE "candidates" (
    "id" SERIAL PRIMARY KEY,
    "name" text NOT NULL,
    "cpf" text UNIQUE NOT NULL,
    "address" text,
    "curriculum" text[],
    "salary" int,
    "created_at" timestamp DEFAULT (now()),
    "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "companies" (
    "id" SERIAL PRIMARY KEY,
    "name" text NOT NULL,
    "cnpj" text UNIQUE NOT NULL,
    "address" text,
    "created_at" timestamp DEFAULT (now()),
    "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "vacancies" (
    "id" SERIAL PRIMARY KEY,
    "role" text NOT NULL,
    "type" text,
    "area" text,
    "requirements" text[],
    "salary" int,
    "quantity" int NOT NULL,
    "company_id" int,
    "created_at" timestamp DEFAULT (now()),
    "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "applications" (
    "id" SERIAL PRIMARY KEY,
    "vacancy_id" int,
    "candidate_id" int,
    "created_at" timestamp DEFAULT (now()),
    "updated_at" timestamp DEFAULT (now())
);

-- FOREIGN KEYS --

ALTER TABLE "vacancies" ADD FOREIGN KEY ("company_id") REFERENCES "companies" ("id") ON DELETE CASCADE;
ALTER TABLE "applications" ADD FOREIGN KEY ("vacancy_id") REFERENCES "vacancies" ("id") ON DELETE CASCADE;
ALTER TABLE "applications" ADD FOREIGN KEY ("candidate_id") REFERENCES "candidates" ("id") ON DELETE CASCADE;

-- TRIGGERS/PROCEDURES --

CREATE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language plpgsql;

CREATE TRIGGER set_vacancies_timestamp
BEFORE UPDATE ON vacancies
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_companies_timestamp
BEFORE UPDATE ON companies
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_candidates_timestamp
BEFORE UPDATE ON candidates
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_applications_timestamp
BEFORE UPDATE ON applications
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
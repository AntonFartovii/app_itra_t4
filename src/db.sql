
CREATE TABLE "public"."user" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "login" VARCHAR(255),
    "password" VARCHAR(255),
    "version" INTEGER,
    "createdAt" INTEGER,
    "updatedAt" INTEGER,
    PRIMARY KEY (id)
);


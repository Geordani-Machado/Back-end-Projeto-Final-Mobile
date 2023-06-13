-- CreateTable
CREATE TABLE "User" (
    "id_user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id_pokemon" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "vida" INTEGER NOT NULL,
    "Img" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Habilidades" (
    "id_habilidades" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "forca" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Pokedex" (
    "id_user" INTEGER NOT NULL,
    "id_pokemon" INTEGER NOT NULL,
    "id_habilidade" INTEGER NOT NULL,
    CONSTRAINT "Pokedex_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pokedex_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "Pokemon" ("id_pokemon") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pokedex_id_habilidade_fkey" FOREIGN KEY ("id_habilidade") REFERENCES "Habilidades" ("id_habilidades") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokedex_id_user_key" ON "Pokedex"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Pokedex_id_pokemon_key" ON "Pokedex"("id_pokemon");

-- CreateIndex
CREATE UNIQUE INDEX "Pokedex_id_habilidade_key" ON "Pokedex"("id_habilidade");

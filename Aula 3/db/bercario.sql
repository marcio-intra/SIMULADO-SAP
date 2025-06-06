CREATE DATABASE nodeBercario;

USE nodebercario;

CREATE TABLE IF NOT EXISTS nodeBercario.bebe(
    id_bebe INT NOT NULL AUTO_INCREMENT KEY,
    nome_bebe VARCHAR(50) NULL,
    sexo_bebe CHAR(1) NULL,
    nome_mae VARCHAR(50) NOT NULL
);
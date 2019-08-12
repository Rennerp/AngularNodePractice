CREATE DATABASE gamesdb;

use ngamesdb;


CREATE TABLE game(
    id int(11) NOT NULL AUTO_INCREMENT primary key,
    title VARCHAR(180),
    description VARCHAR(250),
    image VARCHAR(200),
    create_at TIMESTAMP DEFAUlT CURRENT_TIMESTAMP
);

RENAME TABLE game to games;


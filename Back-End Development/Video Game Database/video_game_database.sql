/* 
_________________
Create databases 
_________________
*/

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name TEXT,
    status TEXT,
    role TEXT,
    date_founded DATE,
    date_disbanded DATE,
    num_of_employees INTEGER,
    current_CEO TEXT
);

CREATE TABLE franchises (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT,
    release_date DATE,
    score DECIMAL(3, 1),
    number_sold BIGINT,
    franchise_id INTEGER REFERENCES franchises(id)
);

CREATE TABLE consoles (
    id SERIAL PRIMARY KEY,
    name TEXT,
    release_date DATE,
    number_sold BIGINT,
    company_id INTEGER REFERENCES companies(id)
);

CREATE TABLE launchers (
    id SERIAL PRIMARY KEY,
    name TEXT,
    release_date DATE,
    company_id INTEGER REFERENCES companies(id)
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE companies_franchises (
    company_id INTEGER REFERENCES companies(id),
    franchise_id INTEGER REFERENCES franchises(id),
    date_acquired DATE
);

CREATE TABLE companies_games (
    developer_id INTEGER REFERENCES companies(id),
    publisher_id INTEGER REFERENCES companies(id),
    game_id INTEGER REFERENCES games(id),
    date_acquired DATE
);

CREATE TABLE games_genres (
    game_id INTEGER REFERENCES games(id),
    genre_id INTEGER REFERENCES genres(id)
);

CREATE TABLE games_consoles (
    game_id INTEGER REFERENCES games(id),
    console_id INTEGER REFERENCES consoles(id)
);

CREATE TABLE games_launchers (
    game_id INTEGER REFERENCES games(id),
    launcher_id INTEGER REFERENCES launchers(id),
    release_date DATE
);

/* 
____________
Insert data 
____________
*/

INSERT INTO companies (name, status, role, date_founded, date_disbanded, num_of_employees, current_CEO) VALUES
('Ubisoft', 'active', 'developer, publisher', '1986-03-28', NULL, 20665, 'Yves Guillemot'),
('Electronic Arts', 'active', 'developer, publisher', '1982-05-27', NULL, 12900, 'Andrew Wilson'),
('Bioware', 'active', 'developer', '1995-02-01', NULL, 320, 'Gary McKay'),
('THQ', 'defunct', 'developer, publisher', '1990-04-01', '2013-01-23', NULL, NULL),
('Sega', 'active', 'developer, publisher', '1960-06-03', NULL, 3459, 'Haruki Satomi'),
('Nintendo', 'active', 'developer, publisher', '1889-09-23', NULL, 7317, 'Shuntaro Furukawa'),
('Activision-Blizzard', 'active', 'developer, publisher', '2008-07-08', NULL, 17000, 'Bobby Kotick'),
('2K', 'active', 'publisher', '2005-01-25', NULL, 3000, 'David Ismailer'),
('Epic Games', 'active', 'developer, publisher', '1991-01-15', NULL, 2200, 'Tim Sweeney'),
('DICE', 'active', 'developer', '1992-05-01', NULL, 714, 'Rebecka Coutaz'),
('Valve', 'active', 'developer, publisher', '1996-08-24', NULL, 360, 'Gabe Newell'),
('Relic Entertainment', 'active', 'developer', '1997-05-01', NULL, 300, 'Justin Dowdeswell'),
('Microsoft', 'active', 'publisher', '1975-04-04', NULL, 221000, 'Satya Nadella'),
('Sony', 'active', 'publisher', '1946-05-07', NULL, 113000, 'Kenichiro Yoshida'),
('Firaxis Games', 'active', 'developer', '1996-05-01', NULL, 180, 'Steve Martin');

INSERT INTO franchises (name) VALUES
('Sonic The Hedgehog'),
('Super Mario Bros.'),
('Assassin''s Creed'),
('Starcraft'),
('Pokemon'),
('Mass Effect'),
('Tom Clancy'),
('Far Cry'),
('Battlefield'),
('Company of Heroes'),
('Dragon Age'),
('Virtual On'),
('Watch Dogs'),
('Warcraft'),
('Dead Space'),
('Medal of Honor'),
('Counter-Strike'),
('Civilization');

INSERT INTO games (name, score, number_sold, franchise_id) VALUES
('Company of Heroes', 9.3, 408000, 10),
('Sonic Generations', 7.7, 1850000, 1),
('Assassin''s Creed 3', 8.4, 12000000, 3),
('Counter Strike Global Offensive', 8.7, 40000000, 17),
('Sid Meier''s Civilization 5', 9.0, 8000000, 18);

INSERT INTO consoles (name, release_date, number_sold, company_id) VALUES
('PC', NULL, NULL, NULL),
('Nintendo Switch', '2017-03-03', 125620000, 6),
('Wii U', '2012-11-18', 13560000, 6),
('Xbox One', '2013-11-22', 58000000, 13),
('Xbox Series', '2020-11-10', 21000000, 13),
('Playstation 4', '2013-11-15', 117200000, 14),
('Playstation 5', '2020-11-12', 25000000, 14),
('Playstation 3', '2006-11-11', 87100000, 14),
('Xbox 360', '2005-11-22', 84000000, 13),
('Nintendo 3DS', '2011-02-26', 75940000, 6);

INSERT INTO launchers (name, release_date, company_id) VALUES
('Steam', '2003-09-12', 11),
('Ubisoft Connect', '2009-11-17', 1),
('Origin', '2011-06-03', 2),
('Epic Games Store', '2018-12-06', 9);

INSERT INTO genres (name) VALUES
('Platformer'),
('Shooter'),
('Fighting'),
('Stealth'),
('Rhythm'),
('Battle Royale'),
('Adventure'),
('Horror'),
('Puzzle'),
('Role-Playing'),
('Roguelite'),
('Simulation'),
('Survival'),
('Sports'),
('Tabletop'),
('Real Time Strategy'),
('Turn Based Strategy');

INSERT INTO companies_games (developer_id, publisher_id, game_id, date_acquired) VALUES
(12, 4, 1, '2006-09-12'), /* Relic Entertainment, THQ, Company of Heroes */
(12, 5, 1, '2013-01-22'), /* Relic Entertainment, Sega, Company of Heroes */
(5, 5, 2, '2011-11-01'), /* Sega, Sega, Sonic Generations */
(1, 1, 3, '2012-10-30'), /* Ubisoft, Ubisoft, Assassin's Creed 3 */
(11, 11, 4, '2012-08-21'), /* Valve, Valve, Counter Strike Global Offensive */
(15, 8, 5, '2010-09-21'); /* Firaxis Games, 2K, Sid Meier's Civilization 5 */

INSERT INTO companies_franchises (company_id, franchise_id, date_acquired) VALUES
(5, 1, '1991-06-23'), /* Sega, Sonic The Hedgehog */
(6, 2, '1985-09-13'), /* Nintendo, Super Mario Bros. */
(1, 3, '2007-11-13'), /* Ubisoft, Assassin's Creed */
(7, 4, '1998-03-31'), /* Activision-Blizzard, Starcraft */
(6, 5, '1996-02-27'), /* Nintendo, Pokemon */
(2, 6, '2007-11-20'), /* Electronic Arts, Mass Effect */
(1, 7, '2008-03-20'), /* Ubisoft, Tom Clancy */
(1, 8, '2004-03-23'), /* Ubisoft, Far Cry */
(2, 9, '2002-09-10'), /* Electronic Arts, Battlefield */
(4, 10, '2006-09-12'), /* THQ, Company of Heroes */
(5, 10, '2013-01-22'), /* Sega, Company of Heroes */
(2, 11, '2009-11-03'), /* Electronic Arts, Dragon Age */
(5, 12, '1996-01-01'), /* Sega, Virtual On */
(1, 13, '2014-05-27'), /* Ubisoft, Watch Dogs */
(7, 14, '1994-11-15'), /* Activision-Blizzard, Warcraft */
(2, 15, '2008-10-13'), /* Electronic Arts, Dead Space */
(2, 16, '1999-10-31'), /* Electronic Arts, Medal of Honor */
(11, 17, '2000-11-09'), /* Valve, Counter-Strike */
(8, 18, '2005-10-25'); /* 2K, Civilization */

INSERT INTO games_consoles (game_id, console_id, release_date) VALUES
(1, 1, '2006-09-12'), /* Company of Heroes, PC */
(2, 8, '2011-11-01'), /* Sonic Generations, Playstation 3 */
(2, 9, '2011-11-01'), /* Sonic Generations, Xbox 360 */
(2, 1, '2011-11-04'), /* Sonic Generations, PC */
(2, 10, '2011-11-22'), /* Sonic Generations, Nintendo 3DS */
(3, 8, '2012-10-30'), /* Assassin's Creed 3, Playstation 3 */
(3, 9, '2012-10-30'), /* Assassin's Creed 3, Xbox 360 */
(3, 3, '2012-11-18'), /* Assassin's Creed 3, Wii U */
(3, 1, '2012-11-20'), /* Assassin's Creed 3, PC */
(3, 1, '2019-03-29'), 
(3, 6, '2019-03-29'), /* Assassin's Creed 3, Playstation 4 */
(3, 4, '2019-03-29'), /* Assassin's Creed 3, Xbox One */
(3, 2, '2019-05-21'), /* Assassin's Creed 3, Nintendo Switch */
(4, 8, '2012-08-21'), /* Counter Strike Global Offensive, Playstation 3 */
(4, 9, '2012-08-21'), /* Counter Strike Global Offensive, Xbox 360 */
(4, 1, '2012-08-21'), /* Counter Strike Global Offensive, PC */
(5, 1, '2010-09-21'); /* Sid Meier's Civilization 5, PC */

INSERT INTO games_genres (game_id, genre_id) VALUES
(1, 25), /* Company of Heroes, Real Time Strategy */
(2, 10), /* Sonic Generations, Platformer */
(2, 16), /* Sonic Generations, Adventure */
(3, 16), /* Assassin's Creed 3, Adventure */
(3, 13), /* Assassin's Creed 3, Stealth */
(4, 11), /* Counter Strike Global Offensive, Shooter */
(5, 26); /* Sid Meier's Civilization 5, Turn Based Strategy */

INSERT INTO games_launchers (game_id, launcher_id) VALUES
(1, 1), /* Company of Heroes, Steam */
(2, 1), /* Sonic Generations, Steam */
(3, 2), /* Assassin's Creed 3, Ubisoft Connect */
(4, 1), /* Counter Strike Global Offensive, Steam */
(5, 1); /* Sid Meier's Civilization 5, Steam */

/*
_____________________ 
Verification Queries 
_____________________
*/

/* companies-franchises cross reference table */
SELECT companies.name AS company, 
    franchises.name AS franchise, 
    companies_franchises.date_acquired AS date_acquired
FROM companies_franchises JOIN companies ON companies_franchises.company_id = companies.id
    JOIN franchises ON franchises.id = companies_franchises.franchise_id;

/* companies-games cross reference table */
WITH developers_games AS (
    SELECT companies.id AS developer_id, 
        companies.name AS developer, 
        games.name AS game, 
        companies_games.date_acquired AS date_acquired
    FROM companies_games JOIN companies ON companies_games.developer_id = companies.id
        JOIN games ON companies_games.game_id = games.id
),
publishers_games AS (
    SELECT companies.id AS publisher_id, 
        companies.name AS publisher, 
        games.name AS game, 
        companies_games.date_acquired AS date_acquired
    FROM companies_games JOIN companies ON companies_games.publisher_id = companies.id
        JOIN games ON companies_games.game_id = games.id
)
SELECT DISTINCT developers_games.developer AS developer, 
    publishers_games.publisher AS publisher, 
    games.name AS game, 
    companies_games.date_acquired AS date_acquired
FROM companies_games JOIN developers_games ON companies_games.developer_id = developers_games.developer_id
    JOIN publishers_games ON companies_games.publisher_id = publishers_games.publisher_id
    JOIN games ON companies_games.game_id = games.id;

/* games-consoles cross reference table */
SELECT games.name AS game, 
    consoles.name AS console, 
    games_consoles.release_date AS release_date
FROM games_consoles JOIN games ON games_consoles.game_id = games.id
	JOIN consoles ON games_consoles.console_id = consoles.id;

/* games-genres cross reference table */
SELECT games.name AS game, 
    genres.name AS genre
FROM games_genres JOIN games ON games_genres.game_id = games.id
	JOIN genres ON games_genres.genre_id = genres.id;

/* games-launchers cross reference table */
SELECT games.name AS game, 
    launchers.name AS launcher
FROM games_launchers JOIN games ON games_launchers.game_id = games.id
	JOIN launchers ON games_launchers.launcher_id = launchers.id;
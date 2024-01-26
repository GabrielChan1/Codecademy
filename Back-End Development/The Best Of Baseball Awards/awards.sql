SELECT batting.yearid, batting.teamid, teams.name, ROUND(AVG(people.weight), 2) AS weight
FROM batting JOIN teams ON batting.team_id = teams.id JOIN people ON batting.playerid = people.playerid
GROUP BY batting.yearid, batting.teamid, teams.name
ORDER BY 4 DESC;
/* The Heaviest Hitters award goes to the Chicago White Sox(CHA) team which had an average weight of 221.33lbs in 2009 */

SELECT batting.yearid, batting.teamid, teams.name, ROUND(AVG(people.height), 2) AS height
FROM batting JOIN teams ON batting.team_id = teams.id JOIN people ON batting.playerid = people.playerid
GROUP BY batting.yearid, batting.teamid, teams.name
ORDER BY 4;
/*The 'Shortest Sluggers' award goes to the Middletown Mansfields(MID) team which had an average height of 66.57in in 1872 */

SELECT salaries.yearid, salaries.teamid, teams.name, SUM(salaries.salary) AS total_salary
FROM salaries JOIN teams ON salaries.team_id = teams.id
GROUP BY salaries.yearid, salaries.teamid, teams.name
ORDER BY 4 DESC;
/* The 'Biggest Spenders' award goes to the New York Yankees(NYA) team which had a total combined salary of $231978886 in 2013 */

SELECT teams.teamid, teams.name, SUM(salaries.salary) / teams.w AS cost_per_win
FROM teams JOIN salaries ON salaries.team_id = teams.id
WHERE salaries.yearid = 2010
GROUP BY teams.teamid, teams.name, teams.w
ORDER BY 3;
/* The 'Most Bang For Their Buck In 2010' award goes to the San Diego Padres(SDN) team which had a cost per win ratio of $419992.22 in 2010 */

SELECT pitching.yearid, pitching.teamid, pitching.playerid, people.nameFirst, people.nameLast, pitching.gs, salaries.salary, salaries.salary / pitching.gs AS cost_per_start
FROM pitching JOIN people ON pitching.playerid = people.playerid JOIN salaries ON people.playerid = salaries.playerid
WHERE pitching.gs >= 10
ORDER BY 8 DESC;
/* The 'Priciest Starter' award goes to Zack Greinke who was the starting pitcher in 10 games and had a cost of $3179903 per game as the starting pitcher in 2019 */
-- 4 - Exiba a média salarial e o nível de senioridade de todas as pessoas empregadas, agrupadas pelo cargo
SELECT
	j.JOB_TITLE "Cargo",
  ROUND(r.AVG_SALARY, 2) "Média salarial",
	CASE
		WHEN r.AVG_SALARY BETWEEN 2000 AND 5900 THEN "Júnior"
		WHEN r.AVG_SALARY BETWEEN 5801 AND 7500 THEN "Pleno"
		WHEN r.AVG_SALARY BETWEEN 7501 AND 10500 THEN "Sênior"
		WHEN r.AVG_SALARY > 10500 THEN "CEO"
	END  "Senioridade"
FROM hr.jobs j
INNER JOIN (
	SELECT JOB_ID, ROUND(AVG(SALARY), 2) AVG_SALARY
	FROM hr.employees
	GROUP BY JOB_ID
	) as r
ON r.JOB_ID = j.JOB_ID
ORDER BY r.AVG_SALARY ASC, j.JOB_TITLE ASC;

-- 2 - Exiba os cargos com seu nível de renumeração associado, com base no salário máximo do cargo
SELECT
  j.JOB_TITLE "Cargo",
    CASE
    WHEN j.MAX_SALARY BETWEEN 5e3 AND 1e4 THEN "Baixo"
    WHEN j.MAX_SALARY BETWEEN 10001 AND 2e4 THEN "Médio"
    WHEN j.MAX_SALARY BETWEEN 20001 AND 3e4 THEN "Alto"
        WHEN j.MAX_SALARY > 3e4 THEN "Altíssimo"
  END "Nível"
FROM hr.jobs j
ORDER BY j.JOB_TITLE ASC;

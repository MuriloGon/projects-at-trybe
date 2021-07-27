-- 15 - Crie uma procedure chamada buscar_media_por_cargo que recebe como parâmetro o nome de um cargo e em retorno deve mostrar a média salarial de todas as pessoas que possuem esse cargo
USE hr;
DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo(IN job_title VARCHAR(35))
BEGIN
  SELECT
      s.AVERAGE "Média salarial"
  FROM hr.jobs j
  INNER JOIN (
    SELECT JOB_ID, ROUND(AVG(SALARY), 2) AVERAGE
    FROM hr.employees
    GROUP BY JOB_ID
  ) s ON s.JOB_ID = j.JOB_ID
  WHERE j.JOB_TITLE = job_title
  LIMIT 1;
END $$

DELIMITER ;

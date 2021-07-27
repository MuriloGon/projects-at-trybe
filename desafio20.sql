-- 20 - Toda pessoa funcionária no banco hr possui um histórico completo de cargos. Logo, crie uma procedure chamada exibir_historico_completo_por_funcionario que, dado o e-mail de uma pessoa funcionária, retorna todos os cargos em seu histórico
USE hr;
DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN email VARCHAR(35))
BEGIN
  DECLARE empid VARCHAR(10);
  SET empid = (SELECT e.EMPLOYEE_ID FROM hr.employees e WHERE e.EMAIL=email);
  SELECT
    CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) "Nome completo",
	d.DEPARTMENT_NAME "Departamento",
	jbs.JOB_TITLE "Cargo"
  FROM hr.job_history jh
  INNER JOIN hr.employees e ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
  INNER JOIN hr.departments d ON d.DEPARTMENT_ID = jh.DEPARTMENT_ID
  INNER JOIN hr.jobs jbs ON jbs.JOB_ID = jh.JOB_ID
  WHERE jh.EMPLOYEE_ID = empid
  ORDER BY 2 ASC, 3 ASC;
END $$
DELIMITER ;

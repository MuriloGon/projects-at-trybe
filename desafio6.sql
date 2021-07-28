-- 6 - Faça um relatório que mostra o histórico de cargos das pessoas empregadas
SELECT
  CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) "Nome completo",
  j.JOB_TITLE "Cargo",
  hs.START_DATE "Data de início do cargo",
  d.DEPARTMENT_NAME "Departamento"
FROM hr.job_history hs
INNER JOIN hr.employees e
  ON e.EMPLOYEE_ID = hs.EMPLOYEE_ID
INNER JOIN hr.jobs j
  ON j.JOB_ID = hs.JOB_ID
INNER JOIN hr.departments d
  ON d.DEPARTMENT_ID = hs.DEPARTMENT_ID
ORDER BY 1 DESC, 2 ASC;

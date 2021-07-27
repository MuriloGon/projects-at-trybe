-- 7 - Faça um relatório que mostra o histórico de cargos das pessoas empregadas que iniciaram seus cargos nos meses de janeiro, fevereiro ou março
SELECT
  UCASE(CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME)) "Nome completo",
  jh.START_DATE "Data de início",
  e.SALARY "Salário"
FROM hr.job_history jh
INNER JOIN hr.employees e
  ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
WHERE MONTH(jh.START_DATE) IN (1, 2, 3)
ORDER BY 1 ASC, 2 ASC;
